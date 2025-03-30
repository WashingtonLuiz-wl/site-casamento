export default function getFirstName(fullName: string): string {
  const nameShortSplit = fullName.split(' ');
  const firstName = `${nameShortSplit.slice(0, 1)}`;

  return firstName;
}
