import React from "react";

const Text = ({ children, color }) => (
  <div style={`color: ${color}`}>{children}</div>
);
const Icon = ({ name }) => <div class={`icon icon-${name}`} />;

function UserStatus({ isOnline, lastSeen }) {
  if (isOnline) {
    return (
      <Text color="green">
        <Icon name="online" /> Online
      </Text>
    );
  } else {
    return (
      <Text color="gray">
        <Icon name="clock" /> Last seen {lastSeen}
      </Text>
    );
  }
}

export default UserStatus;
