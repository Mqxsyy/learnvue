export function GetMessageColor(color: MessageColors) {
	return MessageColorArray[color];
}

export function GetMessageSize(size: MessageSizes) {
	return MessageSizeArray[size];
}

export enum MessageColors {
	Dark,
	Primary,
	Link,
	Info,
	Success,
	Warning,
	Danger,
}

const MessageColorArray = [
	"is-dark",
	"is-primary",
	"is-link",
	"is-info",
	"is-success",
	"is-warning",
	"is-danger",
];

export enum MessageSizes {
	Small,
	Medium,
	Large,
}

const MessageSizeArray = ["is-small", "is-medium", "is-large"];
