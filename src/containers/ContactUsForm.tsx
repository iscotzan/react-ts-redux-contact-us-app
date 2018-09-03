import * as React from "react";
import { Field } from "./../components/Field/Field";
import { Form, required, isEmail, maxLength } from "./../components/Form/Form";
import { IFields } from "./../components/Form/Form.types";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IProps } from "./contactUsForm.types";

// const ContactUsForm: React.SFC = () => {
function ContactUsForm({ name, email, reason, notes, onFieldUpdate }: IProps) {
  const fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    reason: {
      id: "reason",
      label: "Reason",
      editor: "dropdown",
      options: ["", "Marketing", "Support", "Feedback", "Jobs"],
      validation: { rule: required }
    },
    notes: {
      id: "notes",
      label: "Notes",
      editor: "multilinetextbox",
      validation: { rule: maxLength, args: 1000 }
    }
  };
  return (
      <Form
        // action="https://jsonplaceholder.typicode.com/posts"
        action="https://5b8cf3137366ab0014a29b7b.mockapi.io/api/v1/contact"
        fields={fields}
        onFieldUpdate={onFieldUpdate}
        formValues={{ name, email, reason, notes }}
        render={() => (
          <React.Fragment>
            <div className="alert alert-info" role="alert">
              If you wish to get in contact, send me a message!
            </div>
            <Field {...fields.name} value={name} />
            <Field {...fields.email} value={email} />
            <Field {...fields.reason} value={reason} />
            <Field {...fields.notes} value={notes} />
          </React.Fragment>
        )}
      />
  );
}

export function mapStateToProps(state: StoreState) {
  const { contactUs } = state;
  //   console.log("stateToProps: ", contactUs);
  //   console.log("ze state: ", state);
  return {
    name: contactUs.values.name,
    email: contactUs.values.email,
    reason: contactUs.values.reason,
    notes: contactUs.values.notes
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.ContactUsAction>
) {
  return {
    onFieldUpdate: (value: any) => dispatch(actions.updateFormField(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsForm);
