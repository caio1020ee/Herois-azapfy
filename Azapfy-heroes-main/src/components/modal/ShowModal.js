import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

function ShowModal(props) {

  return (
    <div>
      <Modal
        backdrop={false}
        centered
        isOpen={props.open}
        toggle={props.toggle}
      >
        <ModalHeader className="bg-dark text-light" toggle={props.toggle}>
          About this hero
        </ModalHeader>
        <ModalBody className="bg-dark text-light">
          <div className="row">
            <div className="col-12 col-md-4 text-center align-items-center">
              <div>
                <img alt="close-btn" className="modal-hero_image" src={props.hero.images.sm}></img>
                <h3 className="pt-2 fs-6">{props.hero.name}</h3>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="biography_information">
                <h4>Biography:</h4>
                <p>Your full name is {props.hero.biography.fullName === "" ? props.hero.name : props.hero.biography.fullName}, birthplace {props.hero.biography.placeOfBirth === '-' ? 'not informed' : props.hero.biography.placeOfBirth}, made its first appearance in {props.hero.biography.firstAppearance}, belongs to the group {props.hero.connections.groupAffiliation === '-' ? 'not-informed' : props.hero.connections.groupAffiliation}.</p>
              </div>
              <div className="appearance_information row">
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Gender:</h4>
                  <p className="mb-1">{props.hero.appearance.gender === null ? 'Not informed' : props.hero.appearance.gender}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Race:</h4>
                  <p className="mb-1">{props.hero.appearance.race === null ? 'Not informed' : props.hero.appearance.race}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Height:</h4>
                  <p className="mb-1">{props.hero.appearance.height[1]}</p>
                </div>
                <div className="col-6">
                  <h4 className="fs-6 mb-0">Weight:</h4>
                  <p className="mb-1">{props.hero.appearance.weight[1]}</p>
                </div>
              </div>
              <div>
                <h4 className="fs-6 mb-0">Work:</h4>
                <p className="mb-1">{props.hero.work.occupation === '-' ? 'Not informed' : props.hero.work.occupation}</p>
              </div>
              <div>
                <h4 className="fs-6 mb-0">Published by:</h4>
                <p className="mb-1">{props.hero.biography.publisher}</p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ShowModal;
import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalArea = styled.div`
    background-color: #FFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 550px;
    height: 300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #48ABC2; 
        border-radius: 10px;

        &:hover{
            background: #1288A3; 
        }
    }

    .closeBtn{
        display: flex;
        justify-content: flex-end;
        width: 100%;

        span{
            text-align: center;
            cursor: pointer;
            border-radius: 20px;
            background-color: #FF0000;
            color: #EDECEC;
            font-size: 28px;
            width: 35px;
            height: 35px;

            &:hover{
                color: #FFF;
                background-color: #AD0303;
            }
        }
    }
    .modalHeros{
        width: 100%;
        
        a{
            
        }
        .modalImg{
            width: 25%;
            border-radius: 10px;
            transform: scale(0.9);
            transition: all ease .2s;

            &:hover{
                transform: scale(1);
            }
        }
    }
    p{  
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
    }
    form{
        padding: 30px 0;
        display: flex;
        flex-direction: column;

        input{
            margin-bottom: 15px;
        }
    }

@media( max-width: 425px){
    width: 320px;

    .modalImg{
        width: 50% !important;
    }
}
@media( max-width: 320px){
    width: 280px;

    .modalImg{
        width: 50% !important;
    }
}
`;