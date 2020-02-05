function generateGallery(filenames, captions) {
  const x=0;
  console.log("Generating gallery...");
  console.log(filenames);
  console.log(captions);

  const parentElement = document.getElementById('gallery');
//   parentElement.innerHTML += "I am a gallery";
  
  const n = filenames.length
  var thumb_html = [];
  var img_html = [];

  var i;
  for (i = 0; i < n; i++) {
    filename = filenames[i];
    caption = captions[i];
    slide_index = i+1;

    thumb_html.push('<div class="mySlides"><img src="assets/images/' + filename + '"></div>');

    img_html.push([
      '<div class="column">',
      '<img class="demo cursor" src="assets/images/' + filename 
      + '" style="width:100%" onclick="currentSlide(' + slide_index + ')"',
      'alt="' + caption + '">',
      '</div>'
    ].join("\n"));
  }

  console.log(thumb_html[0]);
  console.log(img_html[0]);

  for (i=0; i<n; i++) {
    parentElement.innerHTML += thumb_html[i];
  }

  const middleHTML = [
    '<a class="prev" onclick="plusSlides(-1)">❮</a>',
    '<a class="next" onclick="plusSlides(1)">❯</a>',
    '<div class="caption-container">',
    '<p id="caption"></p>',
    '</div>'
  ].join("\n");
  parentElement.innerHTML += middleHTML;

  var imageHTML ='<div class="row">';
  for (i=0; i<n; i++) {
    imageHTML += img_html[i];
  }
  imageHTML += '</div>';
  parentElement.innerHTML += imageHTML;

}