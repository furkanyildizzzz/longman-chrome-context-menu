
    console.log('This is a popup!');

    function searchInLongman(item, tab)
    {
      const url = new URL(`https://www.ldoceonline.com/dictionary/${item.selectionText}`);
      chrome.tabs.create({ url: url.href, index: tab.index + 1 });
    }

    function searchInYoutube(item, tab)
    {
      const url = new URL(`https://www.youtube.com/results?search_query=${item.selectionText}`);
      chrome.tabs.create({ url: url.href, index: tab.index + 1 });
    }

    chrome.contextMenus.removeAll(function() {
        chrome.contextMenus.create({id: "longmanContextMenu", title: "Search in Longman", contexts:["selection"]});
        //chrome.contextMenus.create({id: "youtubeContextMenu", title: "Search in Youtube", contexts:["selection"]});
      });

/*
    chrome.runtime.onInstalled.addListener(function() {
        chrome.contextMenus.create({
          "id": "longmanContextMenu",
          "title": "Search in Longman",
          "contexts": ['selection', 'page'],
        });
      console.log('longmanContextMenu');
    });

    */
chrome.contextMenus.onClicked.addListener((item, tab) => {
  const url = new URL(`https://www.ldoceonline.com/dictionary/${item.selectionText}`);
  console.log("item", item)
  chrome.tabs.create({ url: url.href, index: tab.index + 1 });
});