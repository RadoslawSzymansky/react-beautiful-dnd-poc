const mainFuse = {
  name: 'Main fuse',
  id: "main-fuse",
  limit: 88,
  fallback: 60,
  type: "fuse",
  children: [
    {
      id: 'sl-1',
      name: 'SiteLoad 1',
      type: 'siteload',
      fallback: 12,
      parent: 'main-fuse'
    },
    {
      id: 'sl-2',
      name: 'SiteLoad 2',
      type: 'siteload',
      fallback: 14,
      parent: 'main-fuse'
    },
    {
      id: 'cs-1',
      name: 'Charging station 1',
      type: 'charging-station',
      fallback: 12,
      parent: 'main-fuse'
    },
    {
      id: 'cs-2',
      name: 'Charging station 2',
      type: 'charging-station',
      fallback: 12,
      parent: 'main-fuse'
    },
    {
      id: 'f-1',
      name: 'Fuse 1',
      type: 'fuse',
      fallback: 12,
      parent: 'main-fuse'
    },
    {
      id: 'cs-3',
      name: 'Chargin Station 3',
      type: 'charging-station',
      fallback: 12,
      parent: 'f-1'
    },
    {
      id: 'sl-3',
      name: 'SiteLoad 3',
      type: 'siteload',
      fallback: 12,
      parent: 'f-1'
    },
    {
      id: 'sl-4',
      name: 'SiteLoad 4',
      type: 'siteload',
      fallback: 12,
      parent: 'sl-3'
    },
  ]
};

export default mainFuse;
