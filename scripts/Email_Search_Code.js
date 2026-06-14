/*
                            ~ Emails Search Code ~
                               ~ by John Ray ~
                   (Assisted by AI, as this code is tricky.)
                        

This code is modelled after the Search_Code.js file, and functions in a similar way.
There are 250 emails which I downloaded from the society's original UnionCloud site,
prior to the university transitioning society accounts to Rubric - this code should allow
all 250 of these society emails to be easily searched for according to date, topic, etc.

                             Cheers! John Ray - 2026
*/
(async function () {
  const EMAIL_COUNT = 250;

  const pages = Array.from({ length: EMAIL_COUNT }, (_, i) => ({
    url: `/emails/${i + 1}/`,   // directory URL, not index.html
    pageNum: i + 1
  }));

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function parseDMY(value) {
    if (!value) return null;
    const parts = value.trim().split("/");
    if (parts.length !== 3) return null;

    const [dd, mm, yyyy] = parts.map(Number);
    if (!dd || !mm || !yyyy) return null;

    return new Date(yyyy, mm - 1, dd);
  }

  function parseKeywords(raw) {
    const parts = (raw || "").split(",").map(s => s.trim());

    return {
      title: parts[3] || "",                  // 4th entry
      date: parts[4] || "",                   // 5th entry
      sentTo: parts[5] ? Number(parts[5]) : null,  // 6th entry
      raw: parts
    };
  }

  async function fetchMeta(page) {
    try {
      const res = await fetch(page.url, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "text/html");

      const keywords = doc.querySelector('meta[name="keywords"]')?.content || "";
      const description = doc.querySelector('meta[name="description"]')?.content || "";
      const parsed = parseKeywords(keywords);

      return {
        url: page.url,
        pageNum: page.pageNum,
        title: parsed.title || doc.title || `Email ${page.pageNum}`,
        eventTitle: parsed.title || "",
        date: parsed.date || "",
        sentTo: parsed.sentTo,
        description,
        keywords
      };
    } catch (err) {
      console.warn("Failed to fetch:", page.url, err);
      return null;
    }
  }

  const indexed = (await Promise.all(pages.map(fetchMeta))).filter(Boolean);

  const els = {
    form: document.getElementById("searchForm"),
    q: document.getElementById("q"),
    eventTitle: document.getElementById("eventTitle"),
    startDate: document.getElementById("startDate"),
    endDate: document.getElementById("endDate"),
    minSent: document.getElementById("minSent"),
    maxSent: document.getElementById("maxSent"),
    clearBtn: document.getElementById("clearBtn"),
    summary: document.getElementById("summary"),
    results: document.getElementById("searchResults")
  };

  function matches(item) {
    const q = els.q.value.trim().toLowerCase();
    const titleFilter = els.eventTitle.value.trim().toLowerCase();
    const startDate = els.startDate.value;
    const endDate = els.endDate.value;
    const minSent = els.minSent.value;
    const maxSent = els.maxSent.value;

    const itemDate = parseDMY(item.date);
    const itemSent = Number(item.sentTo);

    const haystack = [
      item.title,
      item.eventTitle,
      item.description,
      item.keywords,
      item.url
    ].join(" ").toLowerCase();

    if (q && !haystack.includes(q)) return false;

    if (titleFilter) {
      const titleText = (item.eventTitle || item.title || "").toLowerCase();
      if (!titleText.includes(titleFilter)) return false;
    }

    if (startDate && itemDate) {
      const sd = new Date(startDate + "T00:00:00");
      if (itemDate < sd) return false;
    }

    if (endDate && itemDate) {
      const ed = new Date(endDate + "T23:59:59");
      if (itemDate > ed) return false;
    }

    if (minSent !== "" && Number.isFinite(itemSent) && itemSent < Number(minSent)) return false;
    if (maxSent !== "" && Number.isFinite(itemSent) && itemSent > Number(maxSent)) return false;

    return true;
  }

  function render(results) {
    els.summary.textContent = `${results.length} result(s)`;

    if (!results.length) {
      els.results.innerHTML = "<p>No matching emails found.</p>";
      return;
    }

    results.sort((a, b) => {
      const da = parseDMY(a.date);
      const db = parseDMY(b.date);
      return (db?.getTime?.() || 0) - (da?.getTime?.() || 0);
    });

    els.results.innerHTML = results.map(item => {
      const sentText = Number.isFinite(Number(item.sentTo)) ? item.sentTo : "Unknown";
      return `
        <div class="card" style="margin-bottom:1rem;padding:1rem;border:1px solid #ddd;border-radius:10px;">
          <a href="${item.url}" style="font-size:1.15rem;font-weight:600;">
            ${escapeHtml(item.title)}
          </a>
          <div>Date: ${escapeHtml(item.date || "Unknown")}</div>
          <div>Sent to: ${escapeHtml(sentText)}</div>
          <div>Page: ${escapeHtml(item.url)}</div>
        </div>
      `;
    }).join("");
  }

  function runSearch() {
    render(indexed.filter(matches));
  }

  els.form.addEventListener("submit", e => {
    e.preventDefault();
    runSearch();
  });

  els.clearBtn.addEventListener("click", () => {
    els.q.value = "";
    els.eventTitle.value = "";
    els.startDate.value = "";
    els.endDate.value = "";
    els.minSent.value = "";
    els.maxSent.value = "";
    runSearch();
  });

  ["input", "change"].forEach(evt => {
    [els.q, els.eventTitle, els.startDate, els.endDate, els.minSent, els.maxSent]
      .forEach(el => el.addEventListener(evt, runSearch));
  });

  runSearch();
})();
