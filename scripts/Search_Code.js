/*
                               ~ Search Code ~
                               ~ by John Ray ~
                   (Assisted by AI, as this code is tricky.)
                        

This code establishes the link between pages on the site and the search page.
It defines a large function that's called on the search page. Firstly, it creates
a constant array that stores the title and redirect URL of each page (including
descriptions for PDFs that obviously can't contain metadata themselves as they're
not HTML pages), then, it fetches the metadata from the appropriate page, builds a
search entry, creates a URL specific to the search query, filters results specific
to the query, and then, finally, renders the results themselves with the appropriate
fonts and styles. I won't lie, I don't really understand most of this code - so take
caution altering any parts of it after section 1. If adding an entry, please copy and
paste a previous entry's code (it's different for HTML pages and PDFs), and all should
be okay! Remember to include a , after any non-final search entries or it will break!

                             Cheers! John Ray - 2025

*/
(async function(){
  // 1) List all the pages here (include a title and url like the ones included and put any blog entries below "LUAstro Blog")
  const pages = [
    { title: 'Homepage',            url: '/' },
    { title: 'LUAstro Store', url: '/store/' },
    { title: 'Astrophotography',url: '/astrophotography/' },
    { title: 'Newsletters',     url: '/newsletters/' },
    { title: 'LUAstro Blog', url: '/blog/' },
    { title: 'Blog: www.luastro.space announcement', url: '/blog/new-website-announcement/' },
    { title: 'Exec Team',       url: '/exec/' },
    { title: 'About Us',        url: '/aboutus/' },
    { title: 'Search page', url: '/search/' },
    { title: 'Socials Calendar', url: '/socials/' },
    { title: 'History of LUAstro', url: '/history/' },
    { title: 'LUAstro Space Pirate Game', url: '/space-pirate-game/' },
    { title: 'Documents page', url: '/documents/' },    
    { title: 'Archived Emails page', url: '/emails/' },
    { title: 'Siril processing data', url: '/documents/Siril-data/' },
    { title: 'JWST processing data', url: '/documents/JWST-data/' },
    // I have archived all the Lancaster Physics past papers, and other revision material here: (enjoy!)
    { title: 'Physics past papers', url: '/documents/physics-past-papers/' },    
    // Add any newsletter pdfs here (include a description & keywords)
   { title: 'Handout document by Giacomo Rossetti', url: '/documents/GR-Handout-Space-Careers.pdf', description: 'Handout document by Giacomo Rossetti, from his talk on careers in the Space Industry', keywords: 'giacomo, giacomo rossetti, handout, ESA, careers, Space Industry, Careers in the space industry talk, archive, dec 2025, 2025, week 9, 25/26' },
    { title: 'Week 16, 22/23 Newsletter', url: '/newsletters/February 2023 (Week 16).pdf', description: 'ARCHIVE: LUAstro Newsletter from Feb 2023 (Week 16)' , keywords: 'newsletters, archive, 2023, feb 2023, week 16, newsletter, 22/23'},
    { title: 'Week 15, 22/23 Newsletter', url: '/newsletters/LYMAN-alpha Special Edition February 2023 (Week 15).pdf', description: 'ARCHIVE: LYMAN-alpha Special-edition LUAstro Newsletter from Feb 2023 (Week 15)', 
     keywords: 'newsletters, archive, 2023, feb 2023, week 15, LYMAN-alpha, Roses, University of York, University of york astronomy society, competition, newsletter, 22/23' },
    { title: 'Week 14, 22/23 Newsletter', url: '/newsletters/February 2023 (Week 14).pdf', description: 'ARCHIVE: LUAstro Newsletter from Feb 2023 (Week 14)', keywords: 'newsletters, archive, 2023, feb 2023, week 14, newsletter, 22/23' },
    { title: 'Week 13, 22/23 Newsletter', url: '/newsletters/February 2023 (Week 13).pdf', description: 'ARCHIVE: LUAstro Newsletter from Feb 2023 (Week 13)', keywords: 'newsletters, archive, 2023, feb 2023, week 13, newsletter, 22/23' },
    { title: 'Week 12, 22/23 Newsletter', url: '/newsletters/January 2023 (Week 12).pdf', description: 'ARCHIVE: LUAstro Newsletter from Jan 2023 (Week 12)', keywords: 'newsletters, archive, 2023, jan 2023, week 12, newsletter, 22/23' },
    { title: 'Week 6, 22/23 Newsletter', url: '/newsletters/December 2022 (Week 6).pdf', description: 'ARCHIVE: LUAstro Newsletter from Dec 2022 (Week 6)', keywords: 'newsletters, archive, 2022, dec 2022, week 6, newsletter, 22/23' },
    { title: 'Week 5, 22/23 Newsletter', url: '/newsletters/December 2022 (Week 5).pdf', description: 'ARCHIVE: LUAstro Newsletter from Dec 2022 (Week 5)', keywords: 'newsletters, archive, 2022, dec 2023, week 5, newsletter, 22/23' },
    { title: 'Week 1, 22/23 Newsletter', url: '/newsletters/November 2022 (Week 1).pdf', description: 'ARCHIVE: The first LUAstro Newsletter from Nov 2022 (Week 1)', keywords: 'newsletters, archive, 2022, nov 2022, week 1, first newsletter, newsletter, 22/23' },
    // Add new pages here—and they'll be fetched automatically
  ];

  // 2) Helper: fetch & parse meta from each page
  async function fetchMeta(page) {
    let desc = '', keys = '';
    try {
      // If the URL is a PDF, skip fetching HTML and use provided description or filename fallback
      const isPdf = /\.pdf(\?.*)?$/i.test(page.url);
      if (isPdf) {
        const filename = (page.url.split('/').pop() || page.title || page.url).split('?')[0];
        desc = page.description || `PDF: ${filename}`;
        keys = page.keywords || '';
        return { ...page, description: desc, keywords: keys, isPdf: true };
      }

      const res  = await fetch(page.url);
      const text = await res.text();
      const doc  = new DOMParser().parseFromString(text, 'text/html');
      desc = doc.querySelector('meta[name="description"]')?.content || '';
      keys = doc.querySelector('meta[name="keywords"]')?.content    || '';
    } catch(e) {
      console.warn('Failed to fetch', page.url, e);
    }
    return { ...page, description: desc, keywords: keys, isPdf: false };
  }

  // 3) Build index by fetching each page
  const indexed = await Promise.all(pages.map(fetchMeta));

  // 4) Read query and populate input…
  const params = new URLSearchParams(location.search);
  const q      = (params.get('q')||'').trim().toLowerCase();
  const input  = document.getElementById('siteSearchInput');
  input.value  = params.get('q')||'';
  document.getElementById('siteSearchForm')
    .addEventListener('submit', e => {
      e.preventDefault();
      const nq = encodeURIComponent(input.value.trim());
      if(!nq) return;
      location.search = `?q=${nq}`;
    });

  // 5) Filter by title OR keywords OR description
  const results = indexed.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.keywords.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  // 6) Render as before…
  const container = document.getElementById('searchResults');
  container.innerHTML = `<h3>Results for “${params.get('q')||''}”</h3>`;
  if (!q) {
    container.innerHTML += '<p>Please enter a search term above.</p>';
  } else if (results.length === 0) {
    container.innerHTML += '<p>No pages found.</p>';
  } else {
    results.forEach(p => {
      const entry = document.createElement('div');
      entry.style.marginBottom = '1.5rem';
      const isPdf = p.isPdf === true;
      const descSafe = (p.description || '').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      entry.innerHTML = `
        <a href="${p.url}" style="font-size:1.2rem;font-weight:600;color:#b5121b;" ${isPdf ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${p.title} ${isPdf ? '<small style="font-weight:400;color:#666">[PDF]</small>' : ''}
        </a>
        <p style="margin-top:0.3rem;color:#ccc;">${descSafe}</p>
      `;
      container.appendChild(entry);
    });
  }
})();
