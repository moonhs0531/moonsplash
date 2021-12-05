import React, {useEffect} from 'react';
import styled from 'styled-components';
import TopicsScrollMenu from "../components/TopicsScrollMenu";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../../../redux/topics/slice";

function TopicsLnbContainer() {

    const dispatch = useDispatch();
    //what is different?
    // state => state.topics.data
    // state => {state.topics.data} 객체를 반환
    const list = useSelector(state => state.topics.list);

    useEffect(()=> {
        dispatch(ActionCreators.getTopics({
            per_page:30,
            order_by: 'latest',
        }))
    }, [dispatch])

  return (
    <Container>
        <NavLink to="/">Editorial</NavLink>
        <TopicsScrollMenu data={list}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #111;
  padding: 0 20px;
  height: 36px;
  border-right: 1px solid #ddd;
`;

export default TopicsLnbContainer;
