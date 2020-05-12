// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
    const extension = filename.match(/.*\.([^\.]*)$/)[1];
  
      if (extension === 'css')
      return 'text/css'
      else if (extension === 'html')
      return 'text/html'
      else if (extension === 'jpeg' || extension === 'jpg')
      return 'image/jpeg'
      else
      return 'text/plain'
  }