function generateGalleryHTML(filenames, captions) {
  console.log("Generating gallery...");
  console.log(filenames);
  console.log(captions);

  const parentElement = document.getElementById('gallery');
  
  // Generate HTML for each image and thumbnail
  const n = filenames.length
  var img_html = [];
  var thumb_html = [];
  var i;
  for (i = 0; i < n; i++) {
    filename = filenames[i];
    caption = captions[i];
    slide_index = i+1;

    img_html.push('<div class="mySlides"><img src="assets/images/' + filename + '"></div>');

    thumb_html.push([
      '<div class="column">',
      '<img class="demo cursor" src="assets/images/' + filename 
      + '" style="width:100%" onclick="currentSlide(' + slide_index + ')"',
      'alt="' + caption + '">',
      '</div>'
    ].join("\n"));
  }

  // Append HTML for each image to parentElement
  for (i = 0; i < n; i++) {
    parentElement.innerHTML += img_html[i];
  }

  // Append middle HTML (buttons and caption) to parentElement
  const middleHTML = [
    '<a class="prev" onclick="plusSlides(-1)">❮</a>',
    '<a class="next" onclick="plusSlides(1)">❯</a>',
    '<div class="caption-container">',
    '<p id="caption"></p>',
    '</div>'
  ].join("\n");
  parentElement.innerHTML += middleHTML;

  // Append HTML for each thumbnail to parentElement
  var thumbHTML = '';
  for (i = 0; i < n; i++) {
    thumbHTML += thumb_html[i];
  }
  parentElement.innerHTML += thumbHTML;
}