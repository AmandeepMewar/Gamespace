import classes from './Error404.module.css'

import popeye from '../../assets/popeye.gif'
const Error404 = () => {
    return <div className={classes.content}>
        <h2>Double Check your Map, Captain.</h2>
        <p>Page not found.</p>
        <img src={popeye} alt="" />
    </div>
}

export default Error404;