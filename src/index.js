import { deprecateComponents } from './utils/deprecate'

// Addons
import Confirm from './addons/Confirm/Confirm'
import Textarea from './addons/Textarea/Textarea'

// Collections
import { default as Column } from './collections/Grid/GridColumn'
import { default as Field } from './collections/Form/FormField'
import { default as Fields } from './collections/Form/FormFields'
import Form from './collections/Form/Form'
import Grid from './collections/Grid/Grid'
import { default as Row } from './collections/Grid/GridRow'
import Menu from './collections/Menu/Menu'
import MenuItem from './collections/Menu/MenuItem'
import Message from './collections/Message/Message'
import Table from './collections/Table/Table'
import TableColumn from './collections/Table/TableColumn'

// Elements
import Button from './elements/Button/Button'
import Buttons from './elements/Button/Buttons'
import Container from './elements/Container/Container'
import Divider from './elements/Divider/Divider'
import Header from './elements/Header/Header'
import Image from './elements/Image/Image'
import Input from './elements/Input/Input'
import List from './elements/List/List'
import ListItem from './elements/List/ListItem'
import Segment from './elements/Segment/Segment'
import Segments from './elements/Segment/Segments'

// Modules
import Checkbox from './modules/Checkbox/Checkbox'
import Progress from './modules/Progress/Progress'
import Modal from './modules/Modal/Modal'
import ModalContent from './modules/Modal/ModalContent'
import ModalFooter from './modules/Modal/ModalFooter'
import ModalHeader from './modules/Modal/ModalHeader'
import Dropdown from './modules/Dropdown/Dropdown'

// Views
import Item from './views/Items/Item'
import Items from './views/Items/Items'
import Statistic from './views/Statistic/Statistic'

const stardust = {
  // Addons
  Confirm,
  Textarea,

  // Collections
  Form,
  Grid,
  Menu,
  Message,
  Table,

  // Elements
  Button,
  Buttons,
  Container,
  Divider,
  Header,
  Image,
  Input,
  List,
  Segment,
  Segments,

  // Modules
  Checkbox,
  Dropdown,
  Modal,
  Progress,

  // Views
  Item,
  Items,
  Statistic,
}

deprecateComponents(stardust, [
  [Field, 'Use "Form.Field" instead.'],
  [Fields, 'Use "Form.Fields" instead.'],
  [Column, `Use "Grid.Column" instead.`],
  [TableColumn, `Use "Table.Column" instead.`],
  [ListItem, `Use "List.Item" instead.`],
  [MenuItem, `Use "List.Item" instead.`],
  [ModalContent, `Use "Modal.Content" instead.`],
  [ModalFooter, `Use "Modal.Footer" instead.`],
  [ModalHeader, `Use "Modal.Header" instead.`],
  [Row, `Use "Grid.Row" instead.`],
])

export default stardust
