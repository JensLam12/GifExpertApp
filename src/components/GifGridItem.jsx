import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

  return (
    <div className="card">
        <img 
            src={url} alt={url}
        />
        <p>{ title }</p>
    </div>
  )

}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
