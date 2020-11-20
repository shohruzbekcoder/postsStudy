import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function PostMore() {
    let location = useLocation();
    let history = useHistory();
    return (
        <div style={{padding: "30px 15px 15px 15px"}}>
            <div dangerouslySetInnerHTML={{ __html: location.state.data}} ></div>
            <div style={{display: "flex", justifyContent:"right", width: "100%"}}>
                <Button  onClick={() => history.goBack()}>
                    go Back
                </Button>
            </div>
        </div>
    )
}
