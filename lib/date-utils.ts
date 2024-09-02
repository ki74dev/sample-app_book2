/**
 * YYYY/MM/DDにフォーマット
 * @param date 
 * @returns 
 */
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}/${month}/${day}`;
  }
  
  /**
   * YYYY/MM/DD hh:mm:ssにフォーマット
   * @param date 
   * @returns 
   */
  export function formatDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }