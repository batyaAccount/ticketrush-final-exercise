function joinWaitlist(list, email) {
  const updated = list.slice();
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');
  const dotIndex = normalizedEmail.indexOf('.', atIndex + 1);
  if (atIndex <= 0 || atIndex === normalizedEmail.length - 1 ||
      normalizedEmail.indexOf('@', atIndex + 1) !== -1 ||
      dotIndex <= atIndex + 1 || dotIndex === normalizedEmail.length - 1) {
    return updated;
  }

  const alreadyJoined = updated.some(function (existing) {
    return existing.trim().toLowerCase() === normalizedEmail;
  });
  if (!alreadyJoined) updated.push(normalizedEmail);
  return updated;
}

module.exports = { joinWaitlist };
