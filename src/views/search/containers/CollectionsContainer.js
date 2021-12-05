import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import Spinner from "../../shared/loader/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../../../redux/search/slice";
import {ContentContainer} from "../../shared/layout/Layout.Styled";
import GridList from "../../shared/list/GridList";
import CollectionItem from "../../shared/item/CollectionItem";
import {useInViewport} from "../../../hocks/useInViewport";


function CollectionsContainer() {

    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.search.collections.results);

    const {query} = useParams();

    useEffect(() => {
        dispatch(ActionCreators.getSearchCollections({
            query
        }));
    }, [dispatch, query])


    if(!searchResults) return <Spinner/>;
    
    return(
        <Container>
            <ContentContainer>
                <GridList data={searchResults}>
                    {(item) => <CollectionItem item={item}/>}
                </GridList>
            </ContentContainer>

        </Container>
    )
}

const Container = styled.div`
margin-top: 40px;
`;




export default CollectionsContainer;
