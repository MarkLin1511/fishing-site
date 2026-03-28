const hotspots = [
  {
    slug: "sepulveda-basin",
    name: "LA River Recreation Zone",
    area: "Sepulveda Basin, Encino",
    region: "LA area",
    lat: 34.1738,
    lng: -118.4984,
    tags: ["la", "river", "bass"],
    status: "Seasonal river access",
    fish: ["largemouth bass", "carp", "tilapia", "green sunfish"],
    hotNow: "Spring bass start pushing shallow around the slower edges, while carp and sunfish stay active in warming water.",
    tryNow: "Soft plastic worms, corn for carp, or small jigs around calmer cover.",
    checked: "March 27, 2026",
    sourceUrl: "https://mrca.ca.gov/los-angeles-river/la-river-recreation-zone/"
  },
  {
    slug: "legg-lake",
    name: "Legg Lake",
    area: "Whittier Narrows Recreation Area",
    region: "LA area",
    lat: 34.0436,
    lng: -118.0487,
    tags: ["la", "bass", "trout"],
    status: "Trout and bass window",
    fish: ["black bass", "channel catfish", "sunfish", "rainbow trout", "common carp"],
    hotNow: "Late March gives you leftover trout chances plus the start of the shallow spring bass push.",
    tryNow: "Mini jigs or spoons for trout, worms under a bobber for panfish, and soft worms for bass.",
    checked: "March 27, 2026",
    sourceUrl: "https://oehha.ca.gov/fish/advisories/legg-lake"
  },
  {
    slug: "santa-fe-dam",
    name: "Santa Fe Dam Lake",
    area: "Irwindale",
    region: "LA area",
    lat: 34.1282,
    lng: -117.964,
    tags: ["la", "bass", "trout"],
    status: "Warm-water spring mix",
    fish: ["black bass", "bluegill", "channel catfish", "common carp", "redear sunfish"],
    hotNow: "Spring is a strong time for bass and panfish around shore cover, with catfish and carp as backup targets.",
    tryNow: "Worms for panfish, dough or corn for carp, and small plastics for bass.",
    checked: "March 27, 2026",
    sourceUrl: "https://oehha.ca.gov/fish/advisories/santa-fe-dam-lake"
  },
  {
    slug: "castaic-lake",
    name: "Castaic Lake",
    area: "Northern Los Angeles County",
    region: "SoCal bonus",
    lat: 34.5255,
    lng: -118.6143,
    tags: ["bass", "trout"],
    status: "Striper and bass power spot",
    fish: ["black bass", "bluegill", "channel catfish", "common carp", "rainbow trout", "striped bass", "threadfin shad"],
    hotNow: "If you want a bigger-water trip, spring is a real shot at active stripers and warming-water bass.",
    tryNow: "Swimbaits, spoons, or shad-style lures for stripers; plastics and jigs for bass.",
    checked: "March 27, 2026",
    sourceUrl: "https://oehha.ca.gov/fish/advisories/castaic-lake"
  },
  {
    slug: "castaic-lagoon",
    name: "Castaic Lagoon",
    area: "Below Castaic Lake",
    region: "SoCal bonus",
    lat: 34.5195,
    lng: -118.6148,
    tags: ["bass", "trout", "shoreline"],
    status: "Shore-friendly option",
    fish: ["black bass", "bluegill", "common carp", "inland silversides", "rainbow trout", "threadfin shad"],
    hotNow: "A good pick when you want easier bank access but still want a real shot at bass, panfish, or trout leftovers.",
    tryNow: "Tiny jigs, small spoons, worms, or finesse plastics around the bank.",
    checked: "March 27, 2026",
    sourceUrl: "https://oehha.ca.gov/fish/press-release/press-release-fish/updated-fish-advisories-castaic-lake-and-castaic-lagoon-offer-safe-eating-advice-multiple-species"
  },
  {
    slug: "pyramid-lake",
    name: "Pyramid Lake",
    area: "Near Castaic",
    region: "SoCal bonus",
    lat: 34.6542,
    lng: -118.7509,
    tags: ["bass", "trout", "shoreline"],
    status: "Shoreline-only update",
    fish: ["largemouth bass", "smallmouth bass", "striped bass", "rainbow trout", "catfish", "bluegill", "crappie"],
    hotNow: "The fish mix is strong, but DWR posted a January 29, 2026 update saying recreational boat activities were closed because of low water while shoreline access remained open.",
    tryNow: "Shoreline spoons for trout or stripers, plastics for bass, and worms for panfish.",
    checked: "March 27, 2026",
    sourceUrl: "https://water.ca.gov/What-We-Do/Recreation/Pyramid-Lake-Recreation"
  },
  {
    slug: "silverwood-lake",
    name: "Silverwood Lake",
    area: "San Bernardino County",
    region: "SoCal bonus",
    lat: 34.2862,
    lng: -117.3372,
    tags: ["bass", "trout"],
    status: "Trout stocking season",
    fish: ["largemouth bass", "striped bass", "trout", "catfish", "bluegill", "carp", "crappie"],
    hotNow: "The park says trout are stocked between late December and early May, so late March is one of the easier windows for trout plus bass and stripers.",
    tryNow: "Spoons or dough bait for trout, shad baits for stripers, and plastics around cover for bass.",
    checked: "March 27, 2026",
    sourceUrl: "https://www.parks.ca.gov/?page_id=25861"
  },
  {
    slug: "lake-perris",
    name: "Lake Perris",
    area: "Riverside County",
    region: "SoCal bonus",
    lat: 33.8829,
    lng: -117.1809,
    tags: ["bass", "trout"],
    status: "Bass spring lanes",
    fish: ["Alabama spotted bass", "rainbow trout", "channel catfish", "Florida bluegill", "green sunfish"],
    hotNow: "State Parks points bass anglers toward Alessandro Island, trout anglers toward the dam, and catfish anglers toward the southwest corner.",
    tryNow: "Bass plastics or jigs near island structure, shad-style trout presentations, and mackerel or nightcrawlers for catfish.",
    checked: "March 27, 2026",
    sourceUrl: "https://www.parks.ca.gov/?page_id=24695"
  }
];

const mapRoot = document.getElementById("hotspot-map");
const listRoot = document.getElementById("hotspot-list");
const filterButtons = document.querySelectorAll("[data-map-filter]");

let map;
let markers = [];

function markerAccent(spot) {
  if (spot.tags.includes("shoreline")) {
    return "shoreline";
  }

  if (spot.tags.includes("river")) {
    return "river";
  }

  if (spot.tags.includes("trout")) {
    return "trout";
  }

  return "bass";
}

function createPopup(spot) {
  return `
    <div class="popup-card">
      <p class="popup-kicker">${spot.region}</p>
      <h3>${spot.name}</h3>
      <p>${spot.area}</p>
      <p><strong>Fish now:</strong> ${spot.fish.join(", ")}</p>
      <p><strong>Hot now:</strong> ${spot.hotNow}</p>
      <p><strong>Check date:</strong> ${spot.checked}</p>
      <p><a href="${spot.sourceUrl}" target="_blank" rel="noreferrer">Open source</a></p>
    </div>
  `;
}

function createMarker(spot) {
  const icon = L.divIcon({
    className: "aero-marker-wrap",
    html: `<span class="aero-marker aero-marker-${markerAccent(spot)}"></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -10]
  });

  const marker = L.marker([spot.lat, spot.lng], { icon }).bindPopup(createPopup(spot));
  marker.spot = spot;
  return marker;
}

function renderList(filter = "all") {
  if (!listRoot) {
    return;
  }

  const visible = hotspots.filter((spot) => filter === "all" || spot.tags.includes(filter));

  listRoot.innerHTML = visible
    .map(
      (spot) => `
        <article class="hotspot-card" data-spot="${spot.slug}">
          <div class="hotspot-topline">
            <p class="eyebrow">${spot.region}</p>
            <span class="status-pill">${spot.status}</span>
          </div>
          <h3>${spot.name}</h3>
          <p class="spot-meta">${spot.area}</p>
          <p>${spot.hotNow}</p>
          <p><strong>Fish now:</strong> ${spot.fish.join(", ")}</p>
          <p><strong>Try:</strong> ${spot.tryNow}</p>
          <p class="hotspot-meta">Checked ${spot.checked}</p>
          <div class="hero-actions">
            <button class="button button-secondary hotspot-focus" type="button" data-focus="${spot.slug}">Show on map</button>
            <a class="text-link" href="${spot.sourceUrl}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `
    )
    .join("");
}

function applyFilter(filter) {
  renderList(filter);

  markers.forEach((marker) => {
    const shouldShow = filter === "all" || marker.spot.tags.includes(filter);

    if (shouldShow) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });

  const visibleMarkers = markers.filter((marker) => map.hasLayer(marker));

  if (visibleMarkers.length) {
    const group = L.featureGroup(visibleMarkers);
    map.fitBounds(group.getBounds().pad(0.22));
  }
}

function focusSpot(slug) {
  const marker = markers.find((item) => item.spot.slug === slug);

  if (!marker) {
    return;
  }

  map.flyTo(marker.getLatLng(), 10, { duration: 1.2 });
  marker.openPopup();
}

function initMap() {
  if (!mapRoot || typeof L === "undefined") {
    if (mapRoot) {
      mapRoot.innerHTML = "<p class=\"map-fallback\">The interactive map could not load here, but the live CDFW guide link above still works.</p>";
    }
    return;
  }

  map = L.map(mapRoot, {
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  markers = hotspots.map(createMarker);
  markers.forEach((marker) => marker.addTo(map));

  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.22));
  renderList("all");
}

initMap();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.mapFilter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(filter);
  });
});

if (listRoot) {
  listRoot.addEventListener("click", (event) => {
    const focusButton = event.target.closest("[data-focus]");

    if (!focusButton) {
      return;
    }

    focusSpot(focusButton.dataset.focus);
  });
}
