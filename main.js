// Not the most elegant code but fit enough for this example. Enjoy the kitten goodness!
    var contentEl = document.getElementById('content'),
        photoEl = document.getElementById('photo'),
        linkEls = document.getElementsByTagName('a'),
        myElem = document.getElementById('myElem'),
        cats = {
          fluffy: {
            content: 'Fluffy!',
            photo: 'http://placekitten.com/200/200',
            myElem: 'This Fluffy is very fluffy'
          },
          socks: {
            content: 'Socks!',
            photo: 'http://placekitten.com/280/280',
            myElem: "Socks is my name"
          },
          whiskers: {
            content: 'Whiskers!',
            photo: 'http://placekitten.com/350/350',
            myElem: 'This is Whiskers'
          },
          bob: {
            content: 'Just Bob.',
            photo: 'http://placekitten.com/320/270',
            myElem: "I'm Bob"
          }
        };

// update the page on the first load using the pgp get variable to fretrieve the url
getPHP = document.getElementById('getPHP')
updateContent(cats[getPHP.textContent]);
getPHP.remove();


    // Switcheroo!
    function updateContent(data) {
      if (data == null)
        return;

      contentEl.textContent = data.content;
      photoEl.src = data.photo;
      myElem.textContent = data.myElem;
    }

    // Load some mock JSON data into the page
    function clickHandler(event) {
      var cat = event.target.getAttribute('href').split('/').pop(),
          data = cats[cat] || null; // In reality this could be an AJAX request
          console.log(data)
        updateContent(data);

      // Add an item to the history log
      history.pushState(data, event.target.textContent, event.target.href);

      return event.preventDefault();
    }

    // Attach event listeners
    for (var i = 0, l = linkEls.length; i < l; i++) {
      linkEls[i].addEventListener('click', clickHandler, true);
    }

    // Revert to a previously saved state
    window.addEventListener('popstate', function(event) {
      console.log('popstate fired!');

      updateContent(event.state);
    });

    // Store the initial content so we can revisit it later
    history.replaceState({
      content: contentEl.textContent,
      photo: photoEl.src,
      myElem: myElem.textContent
    }, document.title, document.location.href);
