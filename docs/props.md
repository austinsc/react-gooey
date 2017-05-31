Components
----------

**src\Blank.jsx**

### 1. Blank




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\Wizzbanger.jsx**

### 1. Wizzbanger




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
object|object|no||
title|string|no||
visitors|object|no|&lt;See the source code&gt;|
-----
**src\components\Card.jsx**

### 1. Card




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
className|string|no||CSS classes to be rendered on the root element of this component.
size|enum|no||Size of the card component.
-----
**src\components\Level.jsx**

### 1. Level




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
className|string|no||CSS classes to be rendered on the root element of this component.
-----
**src\components\MediaObject.jsx**

### 1. MediaObject




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
className|string|no||CSS classes to be rendered on the root element of this component.
-----
**src\components\Menu.jsx**

### 1. Label




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|no||The display text to be rendered in the menu label
className|any|no||CSS classes to be rendered on the root element of this component.
### 2. List




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|any|no||CSS classes to be rendered on the root element of this component.
### 3. Menu

A simple menu for any type of vertical navigation. Mark <a> tags with the is-active className to render them as the active menu item.   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\components\Message.jsx**

### 1. Message




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
color|enum|no|&lt;See the source code&gt;|Color of the button.
-----
**src\components\Modal.jsx**

### 1. ModalCard




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
active|bool|no||Sets the modal state of visibility.
title|node|no||
footer|union|no||Footer element for the component to be rendered.
onClose|func|no|_.noop|Function specifying the behavior when the modal component is closed.
hideCloseButton|bool|no||Specifies whether to hide the close button on the modal component.
children|any|no||Child elements to be rendered within the component.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\controls\CheckboxList.jsx**

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
**src\controls\Input.jsx**

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
**src\controls\RadioList.jsx**

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
**src\controls\Select.jsx**

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
**src\controls\Switch.jsx**

### 1. Switch




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
model|string|yes||
help|string|no||
placeholder|string|no||
label|string|no||
errorMessages|object|yes|&lt;See the source code&gt;|
-----
**src\elements\Box.jsx**

### 1. Box




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Button.jsx**

### 1. Button




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|no||Text to be rendered within the button.
color|enum|no|&lt;See the source code&gt;|Color of the button.
size|enum|no|&lt;See the source code&gt;|Size of the button.
iconSize|enum|no||Size of icon rendered within the button.
loading|bool|no||Replaces the content of the button with a Loading indicator and sets button to a fixed width.
outlined|bool|no||Changes the style of the button to outlined.
inverted|bool|no|false|Changes the style of the button so the text color becomes the background color, and vice-versa.
focused|bool|no||Adds a highlighted focus border around the button.
hovered|bool|no||Replaces the style of the button with the hovered style effect.
active|bool|no||Replaces the style of the button with the active style effect.
static|bool|no|false|Creates the button so it is non-interactive, useful to align a text label with an input.
children|any|no||Child elements to be rendered within the button.
icon|union|no||Icon to be rendered within the button.
iconPosition|enum|no|&lt;See the source code&gt;|Position of icon to be rendered within the button.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\ButtonGroup.jsx**

### 1. ButtonGroup




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the box.
className|any|no||CSS classes to be rendered on the root element of this component.
addons|bool|no||Renders the buttons as add-ons.
-----
**src\elements\Content.jsx**

### 1. Content




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the content.
className|any|no||CSS classes to be rendered on the root element of this component.
size|enum|no|&lt;See the source code&gt;|Changes the size of the content rendered.
-----
**src\elements\Delete.jsx**

### 1. Delete




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
size|enum|no|&lt;See the source code&gt;|Changes the size of the delete element rendered.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Form.jsx**

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
**src\elements\Icon.jsx**

### 1. Icon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
name|string|yes||Font Awesome name of the icon to be rendered.
size|enum|no||Size of the icon element to be rendered.
rotate|enum|no||Orientation of the icon element to be rendered.
flip|enum|no||Applies flip effect to icon element to be rendered.
fixedWidth|bool|no||Renders the icon element with a fixed width.
spin|bool|no||Applies spin effect to icon element to be rendered.
stack|enum|no||Renders icon elements stacked.
wrap|bool|no|true|Specifies that the flexible icon element will wrap if necessary (default: true).
wrapSize|enum|no|&lt;See the source code&gt;|Specifies size of the wrapping of the flexible icon element.
inverse|bool|no||Applies inverse color to the icon element to be rendered.
className|any|no||CSS classes to be rendered on the root element of this component.
wrench|bool|no||Applies wrench animation effect to icon element.
ring|bool|no||Applies ring animation effect to icon element.
horizontal|bool|no||Applies horizontal animation effect to icon element.
vertical|bool|no||Applies vertical animation effect to icon element.
flash|bool|no||Applies flash animation effect to icon element.
bounce|bool|no||Applies bounce animation effect to icon element.
float|bool|no||Applies float animation effect to icon element.
pulse|bool|no||Applies pulse animation effect to icon element.
shake|bool|no||Applies shake animation effect to icon element.
tada|bool|no||Applies tada animation effect to icon element.
passing|bool|no||Applies passing animation effect to icon element.
burst|bool|no||Applies burst animation effect to icon element.
fast|bool|no||Applies fast animation effect to icon element.
slow|bool|no||Applies slow animation effect to icon element.
hover|bool|no||Applies hover animation effect to icon element.
skip|bool|no||Applies skip animation effect to icon element.
-----
**src\elements\Image.jsx**

### 1. Image




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the image.
src|string|no||Source of image element to be rendered.
size|enum|no||Size of image element to be rendered.
ratio|enum|no||Ratio of image element to be rendered.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Notification.jsx**

### 1. Notification




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the notification.
color|enum|no||Color of the notification.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Progress.jsx**

### 1. Progress




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
color|enum|no|&lt;See the source code&gt;|Color of the progress component.
size|enum|no|&lt;See the source code&gt;|Size of the progress component.
value|string|no||Specified value of the progress component.
max|string|no||Maximum value of the progress component.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Subtitle.jsx**

### 1. Subtitle




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
size|enum|no|5|Size of the component to be rendered.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Table.jsx**

### 1. Table




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
bordered|bool|no||Applies the bordered style to the table component.
striped|bool|no||Applies the striped style to the table component.
narrow|bool|no||Makes the cells of the table component narrower.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Tag.jsx**

### 1. Tag




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
text|string|no||Text to be rendered within the tag component.
color|enum|no|&lt;See the source code&gt;|Color of the tag component.
size|enum|no|&lt;See the source code&gt;|Size of the tag component.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\elements\Title.jsx**

### 1. Title




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
size|enum|no|3|Size of the title component.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\forms\Form.jsx**

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
**src\forms\fields\ArrayField.js**

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
**src\forms\fields\BooleanField.js**

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
**src\forms\fields\DescriptionField.js**

### 1. DescriptionField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no||
description|union|no||
-----
**src\forms\fields\NumberField.js**

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
**src\forms\fields\ObjectField.js**

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
**src\forms\fields\SchemaField.js**

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
**src\forms\fields\StringField.js**

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
**src\forms\fields\TitleField.js**

### 1. TitleField




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|no||
title|string|no||
required|bool|no||
-----
**src\forms\fields\UnsupportedField.js**

### 1. 




-----
**src\forms\widgets\AltDateTimeWidget.js**

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
**src\forms\widgets\AltDateWidget.js**

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
**src\forms\widgets\BaseInput.js**

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
**src\forms\widgets\CheckboxWidget.js**

### 1. CheckboxWidget




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
**src\forms\widgets\CheckboxesWidget.js**

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
**src\forms\widgets\ColorWidget.js**

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
**src\forms\widgets\DateTimeWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src\forms\widgets\DateWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
onChange|func|no||
-----
**src\forms\widgets\EmailWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src\forms\widgets\FileWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
multiple|bool|no|false|
value|union|no||
autofocus|bool|no||
-----
**src\forms\widgets\HiddenWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes||
value|union|no||
-----
**src\forms\widgets\PasswordWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src\forms\widgets\RadioWidget.js**

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
**src\forms\widgets\RangeWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src\forms\widgets\SelectWidget.js**

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
**src\forms\widgets\TextWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src\forms\widgets\TextareaWidget.js**

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
**src\forms\widgets\URLWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no||
-----
**src\forms\widgets\UpDownWidget.js**

### 1. 




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|union|no||
-----
**src\grid\Columns.jsx**

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
offset|union|no||
device|enum|no||
narrow|bool|no||
-----
**src\grid\Tile.jsx**

### 1. Tile




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
ancestor|bool|no||
parent|bool|no||
child|bool|no||
vertical|bool|no||
children|any|no||
className|any|no||CSS classes to be rendered on the root element of this component.
size|enum|no||
-----
**src\layout\Container.jsx**

### 1. Container




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||
fluid|bool|no||
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\layout\Footer.jsx**

### 1. Footer




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children||no|PropTypes.any|
className||no|PropTypes.any|
-----
**src\layout\Hero.jsx**

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
**src\layout\Section.jsx**

### 1. Section




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children||no|PropTypes.any|
className||no|PropTypes.any|
-----
**src\navigation\Nav.jsx**

### 1. Nav




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
className|string|no||CSS classes to be rendered on the root element of this component.
shadow|bool|no||Modifier to add shadow to nav component.
hidden|bool|no||Hides the nav component.
-----
**src\navigation\NavItem.jsx**

### 1. NavItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
-----
**src\navigation\NavItemLink.jsx**

### 1. NavItemLink




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
to|union|yes||Destination for nav link component.
query|object|no||
hash|string|no||
state|object|no||
onlyActiveOnIndex|bool|no|false|
onClick|func|no||Function specifiying behavior when component is clicked.
className|any|no||CSS classes to be rendered on the root element of this component.
target|string|no||
tab|bool|no||
location|object|no||
-----
**src\navigation\NavSection.jsx**

### 1. NavSection




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|any|no||Child elements to be rendered within the component.
alignment|enum|no|&lt;See the source code&gt;|Alignment of the component to be rendered.
menu|bool|no|false|Renders a menu that is collapsable on mobile.
className|any|no||CSS classes to be rendered on the root element of this component.
-----
**src\navigation\NavToggle.jsx**

### 1. NavToggle




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
