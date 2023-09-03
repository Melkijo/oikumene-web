export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      kegiatan: {
        Row: {
          created_at: string
          date: string | null
          desc: string | null
          id: number
          link: string | null
          location: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          desc?: string | null
          id?: number
          link?: string | null
          location?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          desc?: string | null
          id?: number
          link?: string | null
          location?: string | null
          title?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          password: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          password?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          password?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
