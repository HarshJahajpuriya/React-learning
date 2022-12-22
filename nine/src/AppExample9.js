import React from 'react'

const AppExample9 = () => {

const [activeMode, setActiveMode] = React.useState('view')

const onToolBarAction = (ev) => {
setActiveMode(ev.currentTarget.getAttribute('target_action'));
}

return (
<div>
<h1>Thinking Machines</h1>
< ToolBarComponent mode={activeMode} takeAction={onToolBarAction} />
{ activeMode==='view' && <StudentsViewComponent /> }
{ activeMode==='add' && <StudentAddComponent /> }
</div>
)

}

const ToolBarComponent = ({mode, takeAction}) => {

return (
<div>
<hr/>
{mode==='view' && <button type='button' onClick={takeAction} target_action='add'>Add</button> }
{mode==='add' && <button type='button' onClick={takeAction} target_action='view'>Cancel</button> }
<hr/>
</div>
)
}

const StudentsViewComponent = () => {
return (
<div>
Students list
</div>
)
}

const StudentAddComponent = () => {
return (
<div>
Add Student
</div>
)
}

export default AppExample9;