import { Helmet } from "react-helmet";


const MainTitle = ({heading}) => {
    return (
        
            <Helmet>
                <title>BISTRO BOSS | {heading}</title>
            </Helmet>
    
    );
};

export default MainTitle;