import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../../../redux/search/slice";
import {ContentContainer} from "../../shared/layout/Layout.Styled";
import PhotoList from "../../shared/list/PhotoList";
import Spinner from "../../shared/loader/Spinner";
import {useInViewport} from "../../../hocks/useInViewport";

function PhotosContainer() {


    const {query} = useParams();
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.search.photos.results);

    useEffect(() => {
        dispatch(ActionCreators.getSearchPhotos({
            query
        }));
    }, [dispatch, query])


    if(!searchResults) return <Spinner/>;

    
    return(
        <Container>
            <ContentContainer>
                <PhotoList data={searchResults}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
margin-top: 40px;
`;

export default PhotosContainer;
