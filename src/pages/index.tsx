import React from 'react';
import BaseLayout from "../modules/core/BaseLayout";
import Router from './_router';

const index = () => {
    return <BaseLayout Content={<Router />} />
}

export default index;