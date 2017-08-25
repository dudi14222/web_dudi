import React, { Component } from 'react';
import PortfolioList from './portfolioList'
import About from './about'
import SingleInput from './singleInput';
import mockData from '../data/jsonData.json';
import _ from 'lodash';
import * as ReactBootstrap from 'react-bootstrap';
import PropTypes from 'prop-types';

let Button = ReactBootstrap.Button;
let Modal = ReactBootstrap.Modal;


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: mockData,
            modal: { showModal: props.showModal, header: '', itemId: undefined, openForView: false, newTitle: '', imagePath: '', description: '', newImagePath: '', newDescription: '' },
            modalValidation: { titleClassName: '', imageClassName: '', descClassName: '' }
        }
    }

    closeModal() {
        this.props.navigateContent('images');
        this.setModal(false);
    }

    displayItem(itemId) {
        let item = this.state.items.find((item) => { return item.id === itemId })
        this.setModal(true, item, true);
    }
    editItem(itemId) {
        let item = this.state.items.find((item) => { return item.id === itemId })
        this.setModal(true, item);
    }
    openModal() {
        this.setModal(true);
    }
    setModal(show, item, openForView) {
        let m = { ...this.state.modal };
        m.showModal = show;
        if (item) {
            m.itemId = item.id;
            m.header = item.title;
            m.imagePath = item.path;
            m.description = item.description;
        }
        if (openForView) {
            m.openForView = true;
        }
        else {
            m.openForView = false;
        }
        if (!show) {
            this.cleanModal(m);
        }
        this.setState({
            modal: m,
            modalValidation: this.getCleandValidator()
        });
    }
    cleanModal(m) {
        m.newDescription = '';
        m.newImagePath = '';
        m.newTitle = '';
        m.itemId = undefined;
    }
    getCleandValidator() {
        let validator = { ...this.state.modalValidation };
        validator.titleClassName = '';
        validator.imageClassName = '';
        validator.descClassName = '';
        return validator;
    }

    handleTitleChange(e) {
        let m = { ...this.state.modal };
        m.newTitle = e.target.value;
        this.setState({ modal: m });
    }

    handleImagePathChange(e) {
        let m = { ...this.state.modal };
        m.newImagePath = e.target.value;
        this.setState({ modal: m });
    }

    handleDescriptionChange(e) {
        let m = { ...this.state.modal };
        m.newDescription = e.target.value;
        this.setState({ modal: m });
    }

    saveModal() {
        let m = { ...this.state.modal };
        let validator = { ...this.state.modalValidation };
        if (m.newTitle === '' || m.newImagePath === '' || m.newDescription === '') {
            if (m.newTitle === '') {
                validator.titleClassName = 'form-group has-error has-feedback';
            }
            else {
                validator.titleClassName = 'form-group has-success has-feedback';
            }
            if (m.newImagePath === '') {
                validator.imageClassName = 'form-group has-error has-feedback';
            }
            else {
                validator.imageClassName = 'form-group has-success has-feedback';
            }
            if (m.newDescription === '') {
                validator.descClassName = 'form-group has-error has-feedback';
            }
            else {
                validator.descClassName = 'form-group has-success has-feedback';
            }

            this.setState({
                modalValidation: validator
            });
            return;
        }


        let selectedPosition;
        let newItem;
        let itemList;
        if (m.itemId) {
            selectedPosition = _.findIndex(this.state.items, { id: m.itemId });
            newItem = {
                ...this.state.items[selectedPosition],
                title: m.newTitle, path: m.newImagePath, description: m.newDescription
            };

            itemList = [...this.state.items.slice(0, selectedPosition),
                newItem,
            ...this.state.items.slice(selectedPosition + 1)];
        }
        else {
            newItem = { title: m.newTitle, path: m.newImagePath, description: m.newDescription, id: new Date().getTime() }
            itemList = [...this.state.items, newItem];
        }               
        m.showModal = false;
        this.cleanModal(m);

        this.props.navigateContent('images');
        this.setState({
            items: itemList,
            modal: m,
            modalValidation: this.getCleandValidator()
        });
    }

    removeItem(itemId) {
        let copyItems = [...this.state.items];
        let filteredItems = copyItems.filter((item) => {
            return item.id !== itemId;
        });
        this.setState(
            {
                items: filteredItems
            });
    }


    render() {
        let modalHeight = this.state.modal.openForView ? '560px' : '200px';
        return (

            <div className="col-md-10 col-md-offset-2 main-content">
                {this.props.mainContent === 'about' ? <About /> :
                    <PortfolioList items={this.state.items} removeItem={this.removeItem.bind(this)} editItem={this.editItem.bind(this)} displayItem={this.displayItem.bind(this)} />
                }

                <Modal bsSize="lg" show={this.props.showModal || this.state.modal.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.showModal ? 'Add New Image' : this.state.modal.header}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-modal" style={{ height: modalHeight }}>
                            {
                                this.state.modal.openForView ?
                                    <div>
                                        <h5 className="modal-image-desc">{this.state.modal.description}</h5>
                                        <img className="modal-image col-xs-12" src={this.state.modal.imagePath} />
                                    </div>

                                    :
                                    <div>

                                        {
                                            this.props.showModal ? '' :
                                                <h4 className="text-center">Edit {this.state.modal.header}</h4>
                                        }
                                        < form >
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="title">New Title:</label>
                                                    <SingleInput required={'true'} inputType={'text'} content={this.state.modal.newTitle} placeholder={'title'} className={'form-control'} id={'title'} controlFunc={this.handleTitleChange.bind(this)} divClassName={'div-initial ' + this.state.modalValidation.titleClassName} />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="path">Image Path:</label>
                                                    <SingleInput required={'true'} inputType={'text'} content={this.state.modal.newImagePath} placeholder={'/images/bansko.jpg'} className={'form-control'} id={'path'} controlFunc={this.handleImagePathChange.bind(this)} divClassName={'div-initial ' + this.state.modalValidation.imageClassName} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="desc">Description:</label>
                                                    <SingleInput required={'true'} inputType={'text'} content={this.state.modal.newDescription} placeholder={'description'} className={'form-control'} id={'desc'} controlFunc={this.handleDescriptionChange.bind(this)} divClassName={'div-initial ' + this.state.modalValidation.descClassName} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            }
                        </div>

                    </Modal.Body>
                    {this.state.modal.openForView ? '' :
                        <Modal.Footer>
                            <Button onClick={this.saveModal.bind(this)}>Save</Button>
                        </Modal.Footer>
                    }
                </Modal>
            </div>
        );
    }
}

MainContent.propTypes = {
    showModal: PropTypes.bool.isRequired,
    navigateContent: PropTypes.func.isRequired
};
export default MainContent;