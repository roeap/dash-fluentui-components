// context provider
import FluentProvider from "./components/FluentProvider";

// buttons
import Button from "./components/button/Button";

// dialog
import Dialog from "./components/dialog/Dialog";

import Card from "./components/card/Card";
import Checkbox from "./components/checkbox/Checkbox";
import ChoiceGroup from "./components/radio/RadioGroup";
import ComboBox from "./components/dropdown/ComboBox";
import DatePicker from "./components/date_picker/DatePicker";

import Dropdown from "./components/dropdown/Dropdown";
import MessageBar from "./components/message/MessageBar";
import Modal from "./components/modal/Modal";
import Panel from "./components/panel/Panel";
import Pivot from "./components/pivot/Pivot";
import PivotItem from "./components/pivot/PivotItem";
import Separator from "./components/separator/Separator";

// sliders
import Slider from "./components/slider/Slider";
import ToggleSlider from "./components/slider/ToggleSlider";

import Toggle from "./components/toggle/Toggle";

// text
import Text from "./components/text/Text";
import Textarea from "./components/text/Textarea";
import Label from "./components/text/Label";

// templates
import PagesWithSidebar from "./components/templates/PagesWithSidebar";
import Page from "./components/templates/Page";

import { initializeIcons } from "@fluentui/react";
initializeIcons(undefined, { disableWarnings: true });

export {
    FluentProvider,
    Button,
    Card,
    Checkbox,
    ChoiceGroup,
    ComboBox,
    DatePicker,
    Dialog,
    Dropdown,
    Label,
    MessageBar,
    Modal,
    Panel,
    Pivot,
    PivotItem,
    Separator,
    Slider,
    Text,
    Textarea,
    Toggle,
    ToggleSlider,
    PagesWithSidebar,
    Page,
};
