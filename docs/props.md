Components
----------

**src/Blank.jsx**

### 1. Blank




-----
**src/Wizzbanger.jsx**

### 1. Wizzbanger




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
object|object|no||
title|string|no||
visitors|object|no|&lt;See the source code&gt;|
-----
**src/components/Card.jsx**

### 1. Card




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
size|enum|no||
-----
**src/components/Level.jsx**

### 1. Level




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
### 2. LevelItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
### 3. LevelSection




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
left|bool|no||
right|bool|no||
-----
**src/components/MediaObject.jsx**

### 1. MediaObject




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
-----
**src/components/Modal.jsx**

### 1. ModalCard




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
active|bool|no||
title|node|no||
footer|union|no||
onClose|func|no|_.noop|
hideCloseButton|bool|no||
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/controls/CheckboxList.jsx**

### 1. CheckboxList




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
col|number|yes|12|
model|string|yes||
errorMessages|object|yes|&lt;See the source code&gt;|
options|array|yes||
labelAccessor|func|yes|&lt;See the source code&gt;|
form|object|no||
label|string|no||
help|string|no||
placeholder|string|no||
-----
**src/controls/Input.jsx**

### 1. Input




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
col|number|yes|12|
model|string|yes||
errorMessages|object|yes|&lt;See the source code&gt;|
type|enum|yes|&lt;See the source code&gt;|
form|object|no||
label|string|no||
help|string|no||
placeholder|string|no||
-----
**src/controls/RadioList.jsx**

### 1. RadioList




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
col|number|yes|12|
model|string|yes||
errorMessages|object|yes|&lt;See the source code&gt;|
options|array|yes||
labelAccessor|func|yes|&lt;See the source code&gt;|
form|object|no||
label|string|no||
help|string|no||
placeholder|string|no||
-----
**src/controls/Select.jsx**

### 1. Select




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
col|number|yes|12|
model|string|yes||
options|arrayOf|yes||
errorMessages|object|yes|&lt;See the source code&gt;|
form|object|no||
label|string|no||
help|string|no||
-----
**src/controls/Switch.jsx**

### 1. Switch




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
model|string|yes||
help|string|no||
placeholder|string|no||
label|string|no||
errorMessages|object|yes|&lt;See the source code&gt;|
-----
**src/elements/Box.jsx**

### 1. Box




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Button.jsx**

### 1. Button




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|no||
color|custom|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
iconSize|enum|no||
loading|bool|no||
outlined|bool|no||
inverted|bool|no|false|
focused|bool|no||
hovered|bool|no||
active|bool|no||
children|any|no||
icon|union|no||
className|any|no||CSS classes to be rendered on the root element of this component.
iconPosition|enum|no|&lt;See the source code&gt;|
-----
**src/elements/ButtonGroup.jsx**

### 1. ButtonGroup




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
addons|bool|no||
-----
**src/elements/Content.jsx**

### 1. Content




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
size|enum|no|&lt;See the source code&gt;|
-----
**src/elements/Delete.jsx**

### 1. Delete




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
size|enum|no|&lt;See the source code&gt;|
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Form.jsx**

### 1. Form




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
open|bool|yes|true|
display|enum|yes|&lt;See the source code&gt;|
form|shape|yes||
disabled|bool|yes|false|
children|any|no||
title|node|no||
buttons|node|no||
-----
**src/elements/Icon.jsx**

### 1. Icon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
name|string|yes||
size|enum|no||
rotate|enum|no||
flip|enum|no||
fixedWidth|bool|no||
spin|bool|no||
stack|enum|no||
wrap|bool|no|true|
wrapSize|enum|no|&lt;See the source code&gt;|
inverse|bool|no||
className|any|no||CSS classes to be rendered on the root element of this component.
wrench|bool|no||
ring|bool|no||
horizontal|bool|no||
vertical|bool|no||
flash|bool|no||
bounce|bool|no||
float|bool|no||
pulse|bool|no||
shake|bool|no||
tada|bool|no||
passing|bool|no||
burst|bool|no||
fast|bool|no||
slow|bool|no||
hover|bool|no||
skip|bool|no||
-----
**src/elements/Image.jsx**

### 1. Image




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
src|string|no||
size|union|no||
ratio|union|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Notification.jsx**

### 1. Notification




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
color|custom|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Progress.jsx**

### 1. Progress




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
color|enum|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
value|string|no||
max|string|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Subtitle.jsx**

### 1. Subtitle




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
size|union|no|5|
subtitle|bool|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Table.jsx**

### 1. Table




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
bordered|bool|no||
striped|bool|no||
narrow|bool|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Tag.jsx**

### 1. Tag




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
text|string|no||
color|enum|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/elements/Title.jsx**

### 1. Title




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
size|union|no|3|
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/forms/Form.jsx**

### 1. Form




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
uiSchema|object|no||
formData|any|no||
widgets|objectOf|no|widgets|
fields|objectOf|no|fields|
ArrayFieldTemplate|func|no||
FieldTemplate|func|no||
ErrorList|func|no||
onChange|func|no||
onError|func|no||
showErrorList|bool|no||
onSubmit|func|no||
id|string|no||
className|string|no||
name|string|no||
method|string|no||
target|string|no||
action|string|no||
autocomplete|string|no||
enctype|string|no||
acceptcharset|string|no||
noValidate|bool|no||
noHtml5Validate|bool|no||
liveValidate|bool|no||
validate|func|no||
transformErrors|func|no||
safeRenderCompletion|bool|no||
formContext|object|no||
-----
**src/forms/fields/ArrayField.js**

### 1. ArrayField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
uiSchema|shape|no|&lt;See the source code&gt;|
idSchema|object|no|&lt;See the source code&gt;|
errorSchema|object|no||
onChange|func|yes||
onBlur|func|no||
formData|array|no|&lt;See the source code&gt;|
required|bool|no|false|
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
registry|shape|no||
-----
**src/forms/fields/BooleanField.js**

### 1. BooleanField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
name|string|no||
uiSchema|object|no|&lt;See the source code&gt;|
idSchema|object|no||
onChange|func|yes||
formData|bool|no||
required|bool|no||
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
registry|shape|no||
-----
**src/forms/fields/DescriptionField.js**

### 1. DescriptionField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no||
description|union|no||
-----
**src/forms/fields/NumberField.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
registry|object|yes||
schema|object|yes||
uiSchema|object|no|&lt;See the source code&gt;|
idSchema|object|no||
onChange|func|yes||
formData|union|no||
required|bool|no||
formContext|object|yes||
-----
**src/forms/fields/ObjectField.js**

### 1. ObjectField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
uiSchema|object|no|&lt;See the source code&gt;|
errorSchema|object|no|&lt;See the source code&gt;|
idSchema|object|no|&lt;See the source code&gt;|
name|string|no||
onChange|func|yes||
formData|object|no|&lt;See the source code&gt;|
required|bool|no|false|
disabled|bool|no|false|
onBlur|func|no||
readonly|bool|no|false|
registry|shape|no||
-----
**src/forms/fields/SchemaField.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no||
classNames|string|no||
label|string|no||
children|node|yes||
errors|element|no||
rawErrors|arrayOf|no||
help|element|no||
rawHelp|union|no||
description|element|no||
rawDescription|union|no||
hidden|bool|no|false|
required|bool|no|false|
readonly|bool|no|false|
displayLabel|bool|no|true|
fields|object|no||
formContext|object|no||
### 2. SchemaField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
uiSchema|object|no|&lt;See the source code&gt;|
name|string|no||
required|bool|no||
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
idSchema|object|no|&lt;See the source code&gt;|
formData|any|no||
errorSchema|object|no|&lt;See the source code&gt;|
registry|shape|no||
-----
**src/forms/fields/StringField.js**

### 1. StringField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
name|string|no||
schema|object|yes||
uiSchema|object|yes|&lt;See the source code&gt;|
idSchema|object|no||
onChange|func|yes||
onBlur|func|no||
formData|union|no||
registry|shape|no||
formContext|object|yes||
required|bool|no||
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
-----
**src/forms/fields/TitleField.js**

### 1. TitleField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no||
title|string|no||
required|bool|no||
-----
**src/forms/fields/UnsupportedField.js**

### 1. 




-----
**src/forms/widgets/AltDateTimeWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
registry|object|yes||
schema|object|yes||
id|string|yes||
value|string|no||
required|bool|no||
onChange|func|no||
-----
**src/forms/widgets/AltDateWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
value|string|no||
required|bool|no||
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
onChange|func|no||
onBlur|func|no||
time|bool|no|false|
-----
**src/forms/widgets/BaseInput.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||
placeholder|string|no||
value|any|no||
required|bool|no|false|
disabled|bool|no|false|
readonly|bool|no|false|
autofocus|bool|no|false|
onChange|func|no||
onBlur|func|no||
type||no|&lt;See the source code&gt;|
-----
**src/forms/widgets/CheckboxWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
value|bool|no||
required|bool|no||
disabled|bool|no||
readonly|bool|no||
autofocus|bool|no|false|
onChange|func|no||
-----
**src/forms/widgets/CheckboxesWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
options|shape|yes|&lt;See the source code&gt;|
value|any|no||
required|bool|no||
readonly|bool|no||
disabled|bool|no||
multiple|bool|no||
autofocus|bool|no|false|
onChange|func|no||
-----
**src/forms/widgets/ColorWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
value|string|no||
required|bool|no||
disabled|bool|no||
readonly|bool|no||
autofocus|bool|no||
onChange|func|no||
-----
**src/forms/widgets/DateTimeWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src/forms/widgets/DateWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
onChange|func|no||
-----
**src/forms/widgets/EmailWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src/forms/widgets/FileWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
multiple|bool|no|false|
value|union|no||
autofocus|bool|no||
-----
**src/forms/widgets/HiddenWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||
value|union|no||
-----
**src/forms/widgets/PasswordWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src/forms/widgets/RadioWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
options|shape|yes||
value|any|no||
required|bool|no||
disabled|bool|no||
readonly|bool|no||
autofocus|bool|no|false|
onChange|func|no||
-----
**src/forms/widgets/RangeWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src/forms/widgets/SelectWidget.js**

### 1. SelectWidget




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
placeholder|string|no||
options|shape|yes||
value|any|no||
required|bool|no||
disabled|bool|no||
readonly|bool|no||
multiple|bool|no||
autofocus|bool|no|false|
onChange|func|no||
onBlur|func|no||
-----
**src/forms/widgets/TextWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src/forms/widgets/TextareaWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
schema|object|yes||
id|string|yes||
placeholder|string|no||
options|shape|no|&lt;See the source code&gt;|
value|string|no||
required|bool|no||
disabled|bool|no||
readonly|bool|no||
autofocus|bool|no|false|
onChange|func|no||
onBlur|func|no||
-----
**src/forms/widgets/URLWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src/forms/widgets/UpDownWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src/grid/Columns.jsx**

### 1. Columns




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
mobile|bool|no||
desktop|bool|no||
multiline|bool|no||
gapless|bool|no||
### 2. Column




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
size|union|no||
offset|custom|no||
device|custom|no||
narrow|bool|no||
-----
**src/grid/Tile.jsx**

### 1. Tile




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
ancestor|bool|no||
parent|bool|no||
child|bool|no||
vertical|bool|no||
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
size|custom|no||
-----
**src/layout/Container.jsx**

### 1. Container




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
fluid|bool|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/layout/Footer.jsx**

### 1. Footer




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children||no|PropTypes.any|
className||no|PropTypes.any|
-----
**src/layout/Hero.jsx**

### 1. Hero




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|any|no||
color|enum|yes|&lt;See the source code&gt;|
size|enum|yes|&lt;See the source code&gt;|
align|enum|no|&lt;See the source code&gt;|
bold|bool|no||
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
contain|bool|no||
-----
**src/layout/Section.jsx**

### 1. Section




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children||no|PropTypes.any|
className||no|PropTypes.any|
-----
**src/navigation/Nav.jsx**

### 1. Nav




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
className|string|no||CSS classes to be rendered on the root element of this component.
shadow|bool|no||
hidden|bool|no||
-----
**src/navigation/NavItem.jsx**

### 1. NavItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
-----
**src/navigation/NavItemLink.jsx**

### 1. NavItemLink




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
to|union|yes||
query|object|no||
hash|string|no||
state|object|no||
onlyActiveOnIndex|bool|no|false|
onClick|func|no||
className|any|no||CSS classes to be rendered on the root element of this component.
target|string|no||
tab|bool|no||
location|object|no||
-----
**src/navigation/NavSection.jsx**

### 1. NavSection




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
alignment|enum|no|&lt;See the source code&gt;|
menu|bool|no|false|
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src/navigation/NavToggle.jsx**

### 1. NavToggle




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
