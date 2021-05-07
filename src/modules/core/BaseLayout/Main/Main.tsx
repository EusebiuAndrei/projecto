import React, {ReactElement} from 'react';
import useStyles from "./Main.styles";

interface MainProps {
    Content: ReactElement
}

const Main: React.FC<MainProps> = ({ Content }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {Content}
        </main>
    );
}

export default Main;
