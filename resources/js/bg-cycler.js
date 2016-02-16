function BackgroundCycler () {
  const $imageContainers = $('.background-image');
  let index = 0;
  if (!$imageContainers.find('show').length) {
    $imageContainers.eq(0).addClass('show');
  }
  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageContainers.length ? index + 1 : 0;
    // Show the next image.
    $imageContainers.eq(index).addClass('show');
    // Hide the previous image.
    $imageContainers.eq(index - 1).removeClass('show');
  }, 10000);
}

export default BackgroundCycler;
