import { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
  };

  searchImg = ({ search }) => {
    this.setState({ search });
    console.log(this.state.search);
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;

    if (prevState.search !== search) {
      this.setState({ loading: true });
      console.log(this.state.loading);
      axios
        .get(
          `https://pixabay.com/api/?q=${search}&key=32003639-db0e7b4889ce58836b14df3bc`
        )
        .then(({ data }) => this.setState({ items: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(this.state.loading && this.setState({ loading: false }));
    }
  }

  render() {
    const { items, error, loading } = this.state;
    const { searchImg } = this;
    console.log(items);

    return (
      <>
        <Searchbar onSubmit={searchImg} />
        <ImageGallery>
          <ImageGalleryItem items={items} />
        </ImageGallery>
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
      </>
    );
  }
}
