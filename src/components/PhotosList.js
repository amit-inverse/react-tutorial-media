import { useFetchPhotosQuery } from '../store';

function PhotosList({ album }) {
    const {} = useFetchPhotosQuery(album);

    return 'PhotosList';
}

export default PhotosList;
