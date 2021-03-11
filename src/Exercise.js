import React, { useState } from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  

  const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
    <div>
      <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Butterfly</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar> </Collapse>
                <NavItem>
                      <NavLink href="https://github.com/Vannah-22/r-strap" target='_blank'>
                        Butterfly_GitHub
                      </NavLink>
                </NavItem>
          </Navbar>
        <div className="container">
            <div className="cards">
              <Card>
                <CardImg top width="100%" src="silverback_gorilla.jpg" alt="Silverback Gorilla" />
                <CardBody>
                  <CardTitle tag="h5">SilverBack</CardTitle>
                  <CardSubtitle tag="h6" className="imageC">deinarson, Pixabay </CardSubtitle>
                  <CardText>Here is some text</CardText>
                  <Button color="success" href="http://www.cabq.gov/artsculture/biopark/zoo/exhibits/ape-walk/gorillas" target='_blank' >Primate</Button>
                </CardBody>
              </Card>
            </div>

            <div className="cards">
              <Card>
                <CardImg top width="100%" src="orangutan.jpg" alt="Orangutan" />
                <CardBody>
                  <CardTitle tag="h5">Orangutan</CardTitle>
                  <CardSubtitle tag="h6" className="imageC">ntrief, Pixabay </CardSubtitle>
                  <CardText>Here is some text</CardText>
                  <Button color="success" href="http://www.cabq.gov/artsculture/biopark/zoo/exhibits/ape-walk/orangutans" target='_blank'>Primate</Button>
                </CardBody>
              </Card>
            </div>

            <div className="cards">
              <Card>
                <CardImg top width="100%" src="barbary_macaque.jpg" alt="Silverback Gorilla" />
                <CardBody>
                  <CardTitle tag="h5">Macaque</CardTitle>
                  <CardSubtitle tag="h6" className="imageC">blickpixel, Pixabay </CardSubtitle>
                  <CardText>Here is some text</CardText>
                  <Button color="success">Primate</Button>
                </CardBody>
              </Card>
            </div>

        </div>

      </div>

    </div>
  );
};
  export default Example;