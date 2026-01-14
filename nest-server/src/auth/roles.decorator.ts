import { SetMetadata } from '@nestjs/common';

export enum Role {
    Admin = 'admin',
    Supervisor = 'supervisor', // 'superwiser' as per user request, but normalizing to standard term, mapping to 'user' default if needed or just using string. 
    // User mentions 'superwiser'. I will support 'supervisor' string.
    User = 'user'
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
