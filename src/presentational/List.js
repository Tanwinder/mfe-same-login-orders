import React, {useState, useEffect} from 'react';
import { Container, Input, ListGroup, ListGroupItem } from 'reactstrap';
import {useSelector} from 'react-redux'

const ListItems = ({itemsVal}) => {
  return (
    <ListGroup>
      {
          itemsVal && itemsVal.map(item => {
              return(
                <ListGroupItem className="searchList" key={item._id}>
                    <div>{item.purchaseMethod}</div>
                    <div>{item.storeLocation}</div>
                    <div>{item.couponUsed ? 'Coupon Used' : ""}</div>
                </ListGroupItem>
              )
          })
      }
    </ListGroup>
  );

}
const List = ({items}) => {
    return(
        <div className="List">
            <Container fluid>
                <ListItems itemsVal={items}/>
            </Container>
           
        </div>
    )
}

export default List;