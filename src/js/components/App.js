export default function App() {
  return {
    theme: 'light',
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
    get year() {
      const now = new Date;
      return now.getFullYear();
    }
  }
}