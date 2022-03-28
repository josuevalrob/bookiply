import Image from '../../assets/background.png'; 

const styles = {
    background: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        height: '35rem',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        clipPath: 'polygon(0 87%, 50% 95%, 100% 87%, 100% 0, 0 0)',
        boxShadow: 'rgb(8 6 6 / 30%) 0px 0px 0px 2000px inset'
    },
    paper: {
        margin: '0 10%',
        position: 'absolute' as 'absolute',
        top: '10rem',
    },
    container:{
        position: 'relative' as 'relative',
    }
};

export default styles;