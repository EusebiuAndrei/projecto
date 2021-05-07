import {WithTheme} from "../types/material";
import {Avatar, Box, styled} from "@material-ui/core";
import React from "react";

const StackedAvatars = () => {
    return (
        <Members>
            <Member index={0}>AB</Member>
            <Member index={1}>CD</Member>
            <Member index={2}>EF</Member>
        </Members>
    )
}

export default StackedAvatars;

interface MemberProps extends WithTheme {
    index: number
}

const Member = styled(({theme, priority, ...props}) => <Avatar {...props}/>)(({index, theme}: MemberProps) => ({
    position: 'absolute',
    left: theme.spacing(3 * index),
    zIndex: index,
    border: '2px solid white'
}));

const Members = styled(Box)(({theme}) => ({
    display: 'flex',
    position: 'relative',
    width: '90px'
}));