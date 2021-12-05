import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import Spinner from "../../shared/loader/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../../../redux/search/slice";
import {ContentContainer} from "../../shared/layout/Layout.Styled";
import GridList from "../../shared/list/GridList";
import UserItem from "../../shared/item/UserItem";
import {useInViewport} from "../../../hocks/useInViewport";

function UsersContainer() {

    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.search.users.results);

    const {query} = useParams();

    const [page, setPage] = useState(1);


    useEffect(() => {
        dispatch(ActionCreators.getSearchUsers({
            query, page
        }));
    }, [dispatch, query, page])

    const [sentinelRef, isInView] = useInViewport();

    useEffect(() => {
        if(isInView && searchResults.length) {
            setPage((p) => p + 1)
        }
    }, [isInView])


    if(!searchResults) return <Spinner/>;

    return(
        <Container>

            <ContentContainer>
                <GridList data={searchResults}>
                    {
                        (item) => <UserItem item={item}/>
                    }
                </GridList>
                <Sentinel ref={sentinelRef}/>
            </ContentContainer>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Sentinel = styled.div`
  height: 100px;
  background: #fff;
`;




export default UsersContainer;
