export default function DarkMode() {
  return {
    theme: 'light',
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
  }
}