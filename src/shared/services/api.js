import axios from 'axios';

//pixabay
function getServerResponse(q = '', page) {
  const sendParam = {
    key: '23763255-79cd913c0d73945049700542d',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: 1,
  };

  sendParam.q = q;
  sendParam.page = page;

  const response = axios.get('https://pixabay.com/api/', {
    params: sendParam,
  });

  return response.then(({ data }) => data);

  /*    
  //  console.log(response.data.totalHits); //amount of pics (max 500) for free access.
  //  console.log(response.data.hits); //array of pics
  try {
    if (response.data.hits.length === 0 && sendParam.page === 1) {
      throw 'Sorry, there are no images matching your search query. Please try again.';
    }

    const allPagesAmount = Math.ceil(
      response.data.totalHits / sendParam.per_page,
    );
    if (sendParam.page > allPagesAmount) {
      // SWITCH State of Button to OFF ... >>> document.querySelector('.load-more').disabled = true; 
      throw "We're sorry, but you've reached the end of search results.";
    }
    return response;
  } catch (exception) {
    Notiflix.Notify.failure(exception);
    console.log(exception);
  } */
}

export default getServerResponse;
