/*
                           ~ Photo Search Code ~
                               ~ by John Ray ~
                   (Assisted by AI, as this code is tricky.)
                        

This code is functionally similar to the Search_Code.js file, but instead of 
redirecting users to a new query-specific page, it only changes the results on 
the local Astrophotography page. It creates a "master list" of labels that
correspond to each image, with appropriate aliases (terms that will return each 
corresponding image as a result), then normalises search terms (so that it's 
indifferent to grammar or capitalisation), then returns the appropriate results, 
reorganising their size / format on the page to ensure that they fit the best, and 
creates a reactive caption that changes depending on the search query. Like for the 
Search_Code.js file, please only change the first section, the master list, if 
possible, as the rest of the code is highly complex. Unless you feel really confident!

                              Cheers! John Ray - 2025

*/

  (function(){
    const searchInput     = document.getElementById('photoSearch');
    const equipFilter     = document.getElementById('equipmentFilter');
    const creatorFilter   = document.getElementById('creatorFilter');
    const yearFilter      = document.getElementById('yearFilter');
    const captionEl       = document.getElementById('galleryCaption');
    const figures         = Array.from(document.querySelectorAll('.photo-grid figure'));

    // Master list with our labels & aliases
    const objects = [
      { label: 'Andromeda Galaxy (M31)',             aliases: ['andromeda galaxy','m31'] },
      { label: 'Pinwheel Galaxy (M101)',             aliases: ['pinwheel galaxy','m101'] },
      { label: 'Fireworks Galaxy (NGC 6946)',        aliases: ['fireworks galaxy','ngc 6946','ngc6946'] },
      { label: 'Orion Nebula (M42)',                 aliases: ['orion nebula','m42'] },
      { label: 'Rosette Nebula (NGC 2237)',          aliases: ['rosette nebula','ngc 2237','ngc2237'] },
      { label: 'California Nebula (NGC 1499)',       aliases: ['california nebula','ngc 1499','ngc1499'] },
      { label: 'Heart Nebula (IC 1805)',             aliases: ['heart nebula','ic 1805','ic1805'] },
      { label: 'North America Nebula (NGC 7000)',    aliases: ['north america nebula','ngc 7000','ngc7000'] },
      { label: 'Veil Nebula (NGC 6960)',             aliases: ['veil nebula','ngc 6960','ngc6960','Caldwell 33', 'Cygnus Loop'] },
      { label: 'Horsehead, Flame & Orion Nebulae (Barnard 33, NGC 2024, & M42)',
        aliases: [
          'horsehead nebula','barnard 33','barnard33','b33','b 33',
          'flame nebula','ngc 2024','ngc2024','orion nebula','m42','Dark Nebula'
        ]
      },
      { label: 'Horsehead & Flame Nebulae (Barnard 33 & NGC 2024)',
        aliases: [
          'horsehead nebula','barnard 33','barnard33','b33','b 33',
          'flame nebula','ngc 2024','ngc2024','Dark Nebula'
        ]
      },
      { label: 'Pleiades (M45)',                     aliases: ['pleiades','m45'] },
      { label: 'Beehive Cluster (M44)',              aliases: ['beehive cluster','m44'] },
      { label: 'Hercules Cluster (M13)',             aliases: ['hercules cluster','m13'] },
      { label: 'Eagle Nebula (M16)',                 aliases: ['eagle nebula', 'm16'] },
      { label: 'Carina Nebula (NGC 3372)',           aliases: [
          'carina nebula','ngc 3372','ngc3372','jwst','jwst two‑channel image'
        ]
      },
      { label: 'Sun',             aliases: ['Sun','Sol','Sol 1','The Sun','Planetary'] },
      { label: 'Moon',             aliases: ['Moon','The Moon','Cheese','Planetary'] },
      { label: 'Seahorse Nebula, Fireworks Galaxy, & the NGC 6939 Star Cluster',             aliases: [
        'Seahorse Nebula','NGC 6939','ngc6939','Fireworks Galaxy','NGC 6946','ngc6946','Barnard 150', 'B150', 'B 150','Dark Nebula'] },
    ];

    // normalize: lowercase, collapse whitespace (including NBSP), strip punctuation
    function normalize(str) {
      return str
        .toLowerCase()
        .replace(/\u00A0/g,' ')    // non‑breaking spaces → normal space
        .replace(/\s+/g,' ')      // collapse any whitespace
        .replace(/[^\w\s]/g,'')   // strip punctuation
        .trim();
    }

    function filterAndCaption() {
      const rawSearchQuery = searchInput.value.trim();
      const normalizedSearchQuery = normalize(rawSearchQuery);
      const equipFilterValue = equipFilter.value;
      const creatorFilterValue = creatorFilter.value;
      const yearFilterValue = yearFilter.value;

      figures.forEach(fig => {
        const figureObjectRaw = fig.dataset.object || '';
        const figureEquipment = fig.dataset.equipment || '';
        const figureCreator = fig.dataset.creator || '';
        const figureYear = fig.dataset.year || '';

        // Object name matching logic
        let objectMatch = true;
        if (normalizedSearchQuery) {
          objectMatch = false;
          // Find the object definition that corresponds to this figure's data-object
          const matchedObjectDef = objects.find(objDef => {
            const normalizedObjLabel = normalize(objDef.label);
            const normalizedFigureObject = normalize(figureObjectRaw);

            // Check if the figure's data-object matches the object definition's label or any of its aliases
            return normalizedObjLabel === normalizedFigureObject ||
                   objDef.aliases.some(alias => normalize(alias) === normalizedFigureObject);
          });

          if (matchedObjectDef) {
            // Now, check if the normalized search query is included in any of the aliases or the label
            objectMatch = matchedObjectDef.aliases.some(alias => normalize(alias).includes(normalizedSearchQuery)) ||
                          normalize(matchedObjectDef.label).includes(normalizedSearchQuery);
          }
        }

        const equipmentMatch = !equipFilterValue || figureEquipment === equipFilterValue;
        const creatorMatch = !creatorFilterValue || figureCreator === creatorFilterValue;
        const yearMatch = !yearFilterValue || figureYear === yearFilterValue;

        fig.style.display = (objectMatch && equipmentMatch && creatorMatch && yearMatch) ? '' : 'none';
      });

      // Update caption
      let subject = rawSearchQuery || 'LUAstro';
      let text = '';
      if (!yearFilterValue && !creatorFilterValue && !equipFilterValue && !rawSearchQuery) {
        text = 'All LUAstro photos';
      } else {
        text = `${yearFilterValue || 'All'} ${subject} photos`;
        if (creatorFilterValue) text += ` by ${creatorFilterValue}`;
        if (equipFilterValue) text += ` using ${equipFilterValue}`;
      }
      captionEl.textContent = text;
    }

    [searchInput, equipFilter, creatorFilter, yearFilter]
      .forEach(el => el.addEventListener('input', filterAndCaption));

    filterAndCaption(); // Initial filter on page load
  })();
