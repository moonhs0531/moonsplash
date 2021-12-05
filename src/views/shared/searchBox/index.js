import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory} from "react-router-dom";

import { IconSearch } from '../../../icons';
import {DefaultButton} from "../button/Button.Styled";

function SearchBox({ shape }) {
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/photos/${value}`);

  };

  const [value, setValue] = useState('');

  const history = useHistory();

  const onChange = (event) => {
    setValue(event.target.value);
  }


  return (
    <Container className={cn('SearchBox', shape)}>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <IconSearch />
        </Button>
        <Label>
        <Input
            type="text"
            placeholder="Search free high-resolution photos"
            onChange={onChange}
        />
        </Label>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  
  flex: 1;

  &.round{
    
  }
  
  &.square{
    
  }
`;

const Form = styled.form`

  display: flex;
  align-items: center;

  .round &{
     height: 38px;
    background: #eee;
    border-radius: 20px;
  }

  .square &{
    height: 54px;
    background: #fff;
    border-radius: 6px;
  }
`;

const Button = styled(DefaultButton)`
  padding-left: 12px;
  .round &{
    svg{
      width: 20px;
      height: 20px;
    }
  }

  .square &{
    svg{
      width: 24px;
      height: 24px;
    }
  }
`;

const Label = styled.label`
  width: 100%;

  .round &{

  }

  .square &{

  }
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 8px;
  font-size: 14px;
  background: transparent;

  .round &{
font-size: 14px;
  }

  .square &{
font-size: 15px;
  }
`;


export default SearchBox;
