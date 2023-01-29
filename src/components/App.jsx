import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';

import { searchImages } from 'shared/services/img-api';

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  searchImg = ({ search }) => {
    this.setState({ search });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;

    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchImages(search)
        .then(data => this.setState({ items: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { items, error, loading } = this.state;
    const { searchImg, loadMore } = this;

    return (
      <>
        <Searchbar onSubmit={searchImg} />
        <ImageGallery>
          <ImageGalleryItem items={items} />
        </ImageGallery>
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
        {items.length && <Button onClick={loadMore} />}
      </>
    );
  }
}
