import Tablr from "./Tablr";

export default {
    title : 'Tablr - A customizable React Table Component',
    component : Tablr,
    argTypes : {
        rows : {control : ''},
        headers: {control : ''},
    }
}

const Template = args => <Tablr { ...args }/>;

export const Default = Template.bind({});
Default.args = {
    rows : [
        ['This', 'is','just','a', 'test'],
        ['This', 'is','also','a', 'test'],
        ['This', 'is','little','more', 'test'],
        ['This', 'is','bit','of', 'test'],
    ],
    headers : ['Col1','Col2','Col3','Col4',],
}