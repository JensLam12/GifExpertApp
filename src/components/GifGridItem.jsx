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
