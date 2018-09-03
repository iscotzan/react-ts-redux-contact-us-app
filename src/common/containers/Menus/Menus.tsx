import * as React from "react";
import {
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
  DropdownItem
} from "reactstrap";
import "./Menus.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "./../../../actions";

// import { Link } from 'react-router-dom';
export interface IProps {
  children?: React.ReactNode;
  context: any;
  resetState: () => void;
}
export interface IState {
  isOpen: boolean;
}
class Menus extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // console.log("menus state: ", this.props.context);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className={"logoBrand"} href="#/">Contact Us ©</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/contact">Contact</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://github.com/iscotzan/react-ts-redux-contact-us-app">
                  <i className="fab fa-github" />
                  {/* GitHub */}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="#/contact">Contact Us Here Too</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="#/P4g3N07F0und">Page Not Found</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    color={"warning"}
                    onClick={() => {
                      this.props.resetState();
                    }}
                  >
                    Reset State
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// function Menus({children}: IProps) {
// export const Menus: React.SFC<IProps> = () => {
//   return <div className="menusWrapper">Menus</div>;
// };
// export default Menus;
export function mapDispatchToProps(
  dispatch: Dispatch<actions.ContactUsAction>
) {
  return {
    resetState: () => dispatch(actions.resetState())
  };
}
export function mapStateToProps(state: any) {
  //   console.log("stateToProps: ", contactUs);
  //   console.log("ze state: ", state);
  return {
    context: state
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menus);
