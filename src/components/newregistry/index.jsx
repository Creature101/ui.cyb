import * as React from 'react';

const styles = require("./newregistry.css");

export const FieldsTable = ({ children }) => (
  <table className={styles.fieldsTable}>
    {children}
  </table>
);

export const Panel = ({ children, title, noPadding }) => (
  <div className={styles.panel}>
    {title && <h3 className={styles.panelTitle}>{title}</h3>}
    {noPadding ? children : <div className={styles.panelContent}>
      {children}
    </div>}
  </div>
);

export const Label = ({ children, color }) => (
  <label className={styles.label} style={{ background: color }}>
    {children}
  </label>
);


export const CreateButton = ({ children, ...ptops }) => (
  <button  className={styles.createButton} {...ptops}>
    {children}
  </button>
);


export const SideBar = ({ children }) => (
  <div className={styles.sideBar}>
    {children}
  </div>
);

export const Content = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

export const ContainerRegister = ({ children }) => (
  <div className={styles.container2}>
    {children}
  </div>
);


export const Control = ({ children, title }) => (
  <div className={styles.control}>
    <label className={styles.controlLabel}>{title}</label>
    <div className={styles.controlComponent}>{children}</div>
  </div>
);


export const PageTitle = ({ children, inline }) => (
  <h2 className={styles.pageTitle}>
    {children}
  </h2>
);


export const RemoveButton = (props) => (
    <button {...props} className={styles.removeButton} />
);

export const AddButton = (props) => (
    <button {...props} className={styles.addButton} />
);

export const ErrorMessage = (props) => (
    <div {...props} className={styles.errorMessage} />
);

class AddField extends React.Component {
    state = {
        name: ''
    }
    add = () => {
        const {
            name
        } = this.state;
        const type = this.refs.type.value;
        this.props.onAdd(name, type);
        this.setState({
            name: ''
        })
    }
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        const {
            fields
        } = this.props;
        const {
            name
        } = this.state;
        const exist = !!fields.find(x => x.name === name);
        const canAdd = name.length > 0 && !exist;

        return (
            <tr >
                <td>
                    <input value={name} onChange={this.changeName}/>
                </td>
                <td>
                    <select ref='type'>
                        <option value='string'>string</option>
                        <option value='address'>address</option>
                        <option value='bool'>bool</option>
                        <option value='uint256'>uint256</option>
                        <option value='int256'>int256</option>
                    </select>
                </td>
                <td>
                    <AddButton
                        onClick={this.add}
                        disabled={!canAdd}
                    >add</AddButton>
                </td>
            </tr>
        );
    }
}

export { AddField }
