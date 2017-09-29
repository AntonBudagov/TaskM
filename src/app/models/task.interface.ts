export const UrgencyMap: Object[] = [{code: 'warn', name: 'Срочно'}, {code: 'accent', name: 'Нормально'},
    {code: 'primary', name: 'Не срочно'}];
// срочность кастомный тип
export const enum Urgency {
Hi,
Middle,
Low
}

export interface Task {
id: number;
name: string;
description: string;
status: boolean;
urgency: Urgency;
finishTo: Date;
finishToStr?: string;
}

export interface FilteredTasks {
completed: Task[];
uncompleted: Task[];
}

export interface Statistics {
all: number;
completed: number;
uncompleted: number;
urgent: number;
}