import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "formatTime",
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = Math.floor(value % 60);
    // return `${this.pad(minutes)}:${this.pad(seconds)}`;
    return `${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`;
  }

  private pad(value: number): string {
    return value < 9 ? `0${value}` : `${value}`;
  }
}
