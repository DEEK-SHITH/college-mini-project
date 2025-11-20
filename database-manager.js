// database-manager.js - Enhanced database operations
class DatabaseManager {
  constructor() {
    this.collections = {
      USERS: 'users',
      COURSES: 'courses',
      FACULTY: 'faculty',
      ROOMS: 'rooms',
      TIMETABLES: 'timetables',
      DEPARTMENTS: 'departments'
    };
    this.init();
  }

  init() {
    this.data = {
      courses: this.loadFromStorage('courses') || [],
      faculty: this.loadFromStorage('faculty') || [],
      rooms: this.loadFromStorage('rooms') || [],
      departments: this.loadFromStorage('departments') || this.initializeDepartments(),
      timetables: this.loadFromStorage('timetables') || []
    };
  }

  initializeDepartments() {
    const departments = [
      { id: '1', name: 'Computer Science & Engineering', code: 'CSE' },
      { id: '2', name: 'Electronics & Communication', code: 'ECE' },
      { id: '3', name: 'Mechanical Engineering', code: 'ME' },
      { id: '4', name: 'Civil Engineering', code: 'CE' }
    ];
    this.saveToStorage('departments', departments);
    return departments;
  }

  loadFromStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      console.error('Error loading from storage:', error);
      return [];
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving to storage:', error);
      return false;
    }
  }

  async createCourse(courseData) {
    try {
      const newCourse = {
        id: 'course_' + Date.now(),
        ...courseData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      this.data.courses.push(newCourse);
      this.saveToStorage('courses', this.data.courses);
      
      return { success: true, id: newCourse.id, data: newCourse };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getCourses() {
    return { success: true, data: this.data.courses };
  }

  async updateCourse(courseId, updates) {
    try {
      const index = this.data.courses.findIndex(c => c.id === courseId);
      if (index === -1) {
        return { success: false, error: 'Course not found' };
      }
      
      this.data.courses[index] = {
        ...this.data.courses[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      this.saveToStorage('courses', this.data.courses);
      return { success: true, data: this.data.courses[index] };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteCourse(courseId) {
    try {
      this.data.courses = this.data.courses.filter(c => c.id !== courseId);
      this.saveToStorage('courses', this.data.courses);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createFaculty(facultyData) {
    try {
      const newFaculty = {
        id: 'faculty_' + Date.now(),
        ...facultyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      this.data.faculty.push(newFaculty);
      this.saveToStorage('faculty', this.data.faculty);
      
      return { success: true, id: newFaculty.id, data: newFaculty };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getFaculty() {
    return { success: true, data: this.data.faculty };
  }

  async updateFaculty(facultyId, updates) {
    try {
      const index = this.data.faculty.findIndex(f => f.id === facultyId);
      if (index === -1) {
        return { success: false, error: 'Faculty not found' };
      }
      
      this.data.faculty[index] = {
        ...this.data.faculty[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      this.saveToStorage('faculty', this.data.faculty);
      return { success: true, data: this.data.faculty[index] };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteFaculty(facultyId) {
    try {
      this.data.faculty = this.data.faculty.filter(f => f.id !== facultyId);
      this.saveToStorage('faculty', this.data.faculty);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createRoom(roomData) {
    try {
      const newRoom = {
        id: 'room_' + Date.now(),
        ...roomData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      this.data.rooms.push(newRoom);
      this.saveToStorage('rooms', this.data.rooms);
      
      return { success: true, id: newRoom.id, data: newRoom };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getRooms() {
    return { success: true, data: this.data.rooms };
  }

  async updateRoom(roomId, updates) {
    try {
      const index = this.data.rooms.findIndex(r => r.id === roomId);
      if (index === -1) {
        return { success: false, error: 'Room not found' };
      }
      
      this.data.rooms[index] = {
        ...this.data.rooms[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      this.saveToStorage('rooms', this.data.rooms);
      return { success: true, data: this.data.rooms[index] };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deleteRoom(roomId) {
    try {
      this.data.rooms = this.data.rooms.filter(r => r.id !== roomId);
      this.saveToStorage('rooms', this.data.rooms);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getDepartments() {
    return { success: true, data: this.data.departments };
  }

  async createTimetable(timetableData) {
    try {
      const newTimetable = {
        id: 'timetable_' + Date.now(),
        ...timetableData,
        createdAt: new Date().toISOString()
      };
      
      this.data.timetables.push(newTimetable);
      this.saveToStorage('timetables', this.data.timetables);
      
      return { success: true, id: newTimetable.id, data: newTimetable };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getTimetables() {
    return { success: true, data: this.data.timetables };
  }

  async searchCourses(query) {
    const results = this.data.courses.filter(course =>
      course.code?.toLowerCase().includes(query.toLowerCase()) ||
      course.name?.toLowerCase().includes(query.toLowerCase()) ||
      course.department?.toLowerCase().includes(query.toLowerCase())
    );
    return { success: true, data: results };
  }

  async searchFaculty(query) {
    const results = this.data.faculty.filter(faculty =>
      faculty.facultyId?.toLowerCase().includes(query.toLowerCase()) ||
      faculty.name?.toLowerCase().includes(query.toLowerCase()) ||
      faculty.department?.toLowerCase().includes(query.toLowerCase())
    );
    return { success: true, data: results };
  }

  async searchRooms(query) {
    const results = this.data.rooms.filter(room =>
      room.roomId?.toLowerCase().includes(query.toLowerCase()) ||
      room.name?.toLowerCase().includes(query.toLowerCase()) ||
      room.department?.toLowerCase().includes(query.toLowerCase())
    );
    return { success: true, data: results };
  }

  async getDashboardStats() {
    return {
      totalCourses: this.data.courses.length,
      totalFaculty: this.data.faculty.length,
      totalRooms: this.data.rooms.length,
      totalTimetables: this.data.timetables.length
    };
  }
  // Add these methods to the DatabaseManager class in database-manager.js

async getCourseById(courseId) {
  const course = this.data.courses.find(c => c.id === courseId);
  return { success: !!course, data: course };
}

async getFacultyById(facultyId) {
  const faculty = this.data.faculty.find(f => f.id === facultyId);
  return { success: !!faculty, data: faculty };
}

async getRoomById(roomId) {
  const room = this.data.rooms.find(r => r.id === roomId);
  return { success: !!room, data: room };
}
}

const databaseManager = new DatabaseManager();
export { databaseManager };
